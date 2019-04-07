from time import sleep
import pigpio

X = {
    'STEP' : 20,
    'DIR'  : 21
}

Y = {
    'STEP' : 17,
    'DIR'  : 18
}

Z = {
    'STEP' : 5,
    'DIR'  : 6
}

pi = pigpio.pi()
pi.set_mode(X['STEP'], pigpio.OUTPUT)
pi.set_mode(X['DIR'], pigpio.OUTPUT)
pi.set_mode(Y['STEP'], pigpio.OUTPUT)
pi.set_mode(Y['DIR'], pigpio.OUTPUT)
pi.set_mode(Z['STEP'], pigpio.OUTPUT)
pi.set_mode(Z['DIR'], pigpio.OUTPUT)

def MoveX(MOVE_DIR, MOVE_MENT, DELAY):
    if MOVE_DIR > 1 :
        MOVE_DIR = 1
    pi.write(X['DIR'], MOVE_DIR)
    for i in range(MOVE_MENT) :
        pi.write(X['STEP'], pigpio.HIGH)
        sleep(DELAY)
        pi.write(X['STEP'], pigpio.LOW)
        sleep(DELAY)
        
def MoveY(MOVE_DIR, MOVE_MENT, DELAY):
    if MOVE_DIR > 1 :
        MOVE_DIR = 1
    pi.write(Y['DIR'], MOVE_DIR)
    for i in range(MOVE_MENT) :
        pi.write(Y['STEP'], pigpio.HIGH)
        sleep(DELAY)
        pi.write(Y['STEP'], pigpio.LOW)
        sleep(DELAY)
        
def MoveZ(MOVE_DIR, MOVE_MENT, DELAY):
    if MOVE_DIR > 1 :
        MOVE_DIR = 1
    pi.write(Z['DIR'], MOVE_DIR)
    for i in range(MOVE_MENT) :
        pi.write(Z['STEP'], pigpio.HIGH)
        sleep(DELAY)
        pi.write(Z['STEP'], pigpio.LOW)
        sleep(DELAY)
        
def initPos() :
    while 1:
        # if SENSOR1 != 1
        #    MoveZ(0,200,.000006)
        # if SENSOR2 != 1
        #    MoveY(0,200,.000006)
        # if SENSOR3 != 1
        #    MoveX(0,200,.000006)