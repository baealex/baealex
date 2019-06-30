#!/bin/sh
#
# Goorm.io Initialization Script
#
# Installed Services 
# - TightsVNCServer for Ubuntu 16.04 LTS
# - Nanum Fonts
# - XFCE4 with Goodies
# - Korean language support

echo "사용자 이름을 입력해주세요. 입력 후 [ENTER]: "
read USERNAME

apt-get update
apt-get install xfce4 xfce4-goodies -y
apt-get install -y tightvncserver

# Install required dependency files
apt-get install -f -y

# Install korean fonts & dependencies
apt-get install fonts-nanum fonts-nanum-* language-selector-common -y
apt-get install `check-language-support -l ko` -y

adduser $USERNAME
usermod -aG sudo $USERNAME

echo -e "\nLANG=\"ko_KR.UTF-8\"\nLANGUAGE=\"ko:en\"" > /etc/default/locale
echo -e "\nLANG=\"ko_KR.UTF-8\"\nLANGUAGE=\"ko:en\"" > ~$USERNAME/.pam_environment

# Configure VNC Server to run with port 5900
su -c "vncserver -geometry 1280x720 :0" $USERNAME 
su -c "vncserver -kill :0" $USERNAME

cd /home/$USERNAME/.vnc
mv xstartup xstartup.original
echo "xfce4-session &" > xstartup
chown $USERNAME.$USERNAME xstartup
chmod +x xstartup

# Configure noVNC server
cd /home/$USERNAME/
git clone https://github.com/novnc/noVNC.git noVNC
echo "rm -rf /tmp/.X0-lock /tmp/.X11-unix\nsu -c \"vncserver :0 -geometry 1680x920\" $USERNAME\n/home/$USERNAME/noVNC/utils/launch.sh --listen 80 --vnc localhost:5900 --web /home/$USERNAME/noVNC/" > start_vnc.sh
chmod +x start_vnc.sh
./start_vnc.sh