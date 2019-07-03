#!/usr/bin/env python

import serial, time
from models import *

#루프백 테스트에 사용할 UART용 가상 파일 ttyAMA0(ttyS0)를 연다.
if(pigpio.RPI_REVISION < 3):
  ser = serial.Serial(port = "/dev/ttyAMA0", baudrate=9600, timeout=2)
else:
  ser = serial.Serial(port = "/dev/ttyS0", baudrate=9600, timeout=2)

if (ser.isOpen() == False):
    ser.open()
#만약 ttyAMA0에 데이터가 남아있으면 비우고 새로 시작한다.
ser.flushInput()
ser.flushOutput()

try:
    while(True): 
        ser.flushInput()
        ser.flushOutput()
        #ser.write(packet.encode())
        data = ser.read()
        if not data == b"":
            print("Receive:", data)
            for i in range(4):
                par_1 = ser.read()
                par_2 = ser.read()
                start_test(par_1, par_2)

except (KeyboardInterrupt, SystemExit):
    print("KeyboardInterrupt")

finally:
    ser.close()