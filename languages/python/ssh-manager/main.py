import time
import paramiko

def ssh_command(function):
    def wrapper(instance, *args, **kwargs):    
        if not instance.is_connet:
            instance.ssh_connet()

        return function(instance, *args, **kwargs)

        if not 'resume' in kwargs:
            kwargs['resume'] = True
        
        if not kwargs['resume']:
            instance.ssh_close()
    return wrapper

class SSHManager:
    def __init__(self, address, username, password):
        self.address = address
        self.username = username
        self.password = password
        self.is_connet = False
    
    def ssh_connet(self):
        print('Connection : ' + self.address)
        self.is_connet = True
        self.cli = paramiko.SSHClient()
        self.cli.set_missing_host_key_policy(paramiko.AutoAddPolicy)
        self.cli.connect(self.address, username=self.username, password=self.password)
        self.channel = self.cli.invoke_shell()
        self.waitStream(self.channel)

    def ssh_close(self):
        print('Disconnect : ' + self.address)
        self.cli.close()

    def waitStream(self, channel):
        time.sleep(1)
        return self.channel.recv(65535).decode("utf-8")
    
    @ssh_command
    def run(self, command: str):
        self.channel.send(command + '\n')
        output = self.waitStream(self.channel)
        return output

if __name__ == '__main__':

    ssh_manage = SSHManager(ip, username, password)
    name_output = run('')
    for line in name_output.split('\n'):
        if '@' in line:
            print(line.split('@')[1].split('$')[0]) # server name
    
    storage_output = run('df', resume=False)
    for line in storage_output.split('\n'):
        if '/dev/xvda3' in line:
            for item in line.split():
                if '%' in item:
                    print(item) # remain-storage