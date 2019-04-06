from time import sleep
import pigpio

X = {
    'STEP' : 16,
    'DIR'  : 17
}

Y = {
    'STEP' : 12,
    'DIR'  : 13
}

Z = {
    'STEP' : 6,
    'DIR'  : 7
}

pi = pigpio.pi()
pi.set_mode(X['STEP'], pigpio.OUTPUT)
pi.set_mode(X['DIR'], pigpio.OUTPUT)
pi.set_mode(Y['STEP'], pigpio.OUTPUT)
pi.set_mode(Y['DIR'], pigpio.OUTPUT)
pi.set_mode(Z['STEP'], pigpio.OUTPUT)
pi.set_mode(Z['DIR'], pigpio.OUTPUT)

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