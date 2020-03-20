import os
import pigpio
import time

class DefaultConf:
    window = {
        'size': {
            'width' : 800,
            'height' : 600
        },
        'config': {
            'objectName' : 'ControlPanel',
            'title' : 'Control Panel v2'
        }
    }

class UserConf:
    parser = {
        'input' : {
            'count' : 'ObjectNumber',
            'speed' : 'PulseSpeed'
        }
    }
    isRead = False
    def __init__(self):
        self.isRead = os.path.isfile('user.conf')
        if self.isRead:
            with open('user.conf', 'r') as readOnFile:
                self.lines = readOnFile.readlines()
    
    def getConf(self, conf):
        for line in self.lines:
            if line.split(':')[0] == conf:
                 return line.split(':')[1]
        return None
        
class MoterConf:
    pinInfo = {
        'X' : {
            'STEP' : 20,
            'DIR'  : 21
        },
        'Y' : {
            'STEP' : 20,
            'DIR'  : 21
        },
        'Z' : {
            'STEP' : 20,
            'DIR'  : 21
        }
    }

    def __init__(self):
        self.pi = pigpio.pi()
        self.pi.set_mode(self.pinInfo['X']['STEP'], pigpio.OUTPUT)
        self.pi.set_mode(self.pinInfo['X']['DIR' ], pigpio.OUTPUT)
        self.pi.set_mode(self.pinInfo['Y']['STEP'], pigpio.OUTPUT)
        self.pi.set_mode(self.pinInfo['Y']['DIR' ], pigpio.OUTPUT)
        self.pi.set_mode(self.pinInfo['Z']['STEP'], pigpio.OUTPUT)
        self.pi.set_mode(self.pinInfo['Z']['DIR' ], pigpio.OUTPUT)
    
    def setPulseAxis(self, axis, delay):
        self.pi.write(self.pinInfo[axis]['STEP'], pigpio.HIGH)
        time.sleep(delay)
        self.pi.write(self.pinInfo[axis]['STEP'], pigpio.LOW)
        time.sleep(delay)

    def setDirAxis(self, axis, direction):
        self.pi.write(self.pinInfo[axis]['DIR'], direction)