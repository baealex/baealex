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