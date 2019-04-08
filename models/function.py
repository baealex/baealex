from infomaion import *

def MoveX(MOVE_DIR, MOVE_MENT, DELAY):
    pi.write(X['DIR'], MOVE_DIR)
    for i in range(MOVE_MENT) :
        pi.write(X['STEP'], pigpio.HIGH)
        sleep(DELAY)
        pi.write(X['STEP'], pigpio.LOW)
        sleep(DELAY)
        
def MoveY(MOVE_DIR, MOVE_MENT, DELAY):
    pi.write(Y['DIR'], MOVE_DIR)
    for i in range(MOVE_MENT) :
        pi.write(Y['STEP'], pigpio.HIGH)
        sleep(DELAY)
        pi.write(Y['STEP'], pigpio.LOW)
        sleep(DELAY)
        
def MoveZ(MOVE_DIR, MOVE_MENT, DELAY):
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

def MoveStart(X_VALUE, Y_VALUE, Z_VALUE, SPEED):
    MoveX(1, X_VALUE, SPEED)
    MoveY(1, Y_VALUE, SPEED)
    MoveZ(1, Z_VALUE, SPEED)

def MoveStop():
    initPos()