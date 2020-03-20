#-*- coding:utf-8 -*-

import serial, time
from models import *

#루프백을 이용한 시리얼 통신
if(pigpio.RPI_REVISION < 3):
  ser = serial.Serial(port = "/dev/ttyAMA0", baudrate=9600, timeout=2)
else:
  ser = serial.Serial(port = "/dev/ttyS0", baudrate=9600, timeout=2)

if (ser.isOpen() == False):
    ser.open()
ser.flushInput()
ser.flushOutput()
# ------------------

# Main Loop
try:
    while(True): 
        ser.flushInput()
        ser.flushOutput()
        # ser.write(packet.encode())
        data = ser.read()
        if not data == b"":
            print("Receive:", data)
        if data == b"0": # Start Btn Event
            param = ser.readline()
            par = param.decode.split(",")
            start_test(par[0], par[1]) # Run Moter
# ------------------

# 키보드 인터럽트시 종료
except (KeyboardInterrupt, SystemExit):
    print("KeyboardInterrupt")
# ------------------

finally:
    ser.close()