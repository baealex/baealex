import os

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
        
