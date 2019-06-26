from time import sleep
import datetime
import pigpio
import views

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

x_move_total = 0
y_move_total = 0
z_move_total = 0

x_now_pos = 0
y_now_pos = 0
z_now_pos = 0

pi = pigpio.pi()
pi.set_mode(X['STEP'], pigpio.OUTPUT)
pi.set_mode(X['DIR'], pigpio.OUTPUT)
pi.set_mode(Y['STEP'], pigpio.OUTPUT)
pi.set_mode(Y['DIR'], pigpio.OUTPUT)
pi.set_mode(Z['STEP'], pigpio.OUTPUT)
pi.set_mode(Z['DIR'], pigpio.OUTPUT)

def Debug(log):
    mStr = '[DEBUG]['+str(datetime.datetime.now())+']'+log
    views.temp_func(mStr)

def MoveX(MOVE_DIR, MOVE_MENT, DELAY):
    global x_move_total
    
    if MOVE_DIR == 1:
        x_move_total += MOVE_MENT
    else:
        x_move_total -= MOVE_MENT
    
    pi.write(X['DIR'], MOVE_DIR)
    for i in range(MOVE_MENT) :
        pi.write(X['STEP'], pigpio.HIGH)
        sleep(DELAY)
        pi.write(X['STEP'], pigpio.LOW)
        sleep(DELAY)
        
def MoveY(MOVE_DIR, MOVE_MENT, DELAY):
    global y_move_total
    
    if MOVE_DIR == 0:
        y_move_total += MOVE_MENT
    else:
        y_move_total -= MOVE_MENT
        
    pi.write(Y['DIR'], MOVE_DIR)
    for i in range(MOVE_MENT) :
        pi.write(Y['STEP'], pigpio.HIGH)
        sleep(DELAY)
        pi.write(Y['STEP'], pigpio.LOW)
        sleep(DELAY)
        
def MoveZ(MOVE_DIR, MOVE_MENT, DELAY):
    global z_move_total
    
    if MOVE_DIR == 0:
        z_move_total += MOVE_MENT
    else:
        z_move_total -= MOVE_MENT
    
    pi.write(Z['DIR'], MOVE_DIR)
    for i in range(MOVE_MENT) :
        pi.write(Z['STEP'], pigpio.HIGH)
        sleep(DELAY)
        pi.write(Z['STEP'], pigpio.LOW)
        sleep(DELAY)
        
def MoveInit():
    global x_move_total
    global y_move_total
    global z_move_total
    pi.write(X['DIR'], 0)
    for i in range(x_move_total) :
        pi.write(X['STEP'], pigpio.HIGH)
        sleep(0.00001)
        pi.write(X['STEP'], pigpio.LOW)
        sleep(0.00001)
    pi.write(Y['DIR'], 1)
    for i in range(y_move_total) :
        pi.write(Y['STEP'], pigpio.HIGH)
        sleep(0.00001)
        pi.write(Y['STEP'], pigpio.LOW)
        sleep(0.00001)
    pi.write(Z['DIR'], 1)
    for i in range(z_move_total) :
        pi.write(Z['STEP'], pigpio.HIGH)
        sleep(0.00001)
        pi.write(Z['STEP'], pigpio.LOW)
        sleep(0.00001)
    x_move_total = 0
    y_move_total = 0
    z_move_total = 0
    
def btn_start_click_function(X_VALUE, Y_VALUE, Z_VALUE, Pulse):
    MoveX(1, 50000, 0.00001)
    for i in range(X_VALUE):
        MoveY(0, Y_VALUE, 1/Pulse)
        MoveZ(1, 3000, 1/Pulse)
        sleep(3)
        MoveZ(0, 3000, 1/Pulse)
    # MoveX(1, X_VALUE, 1/Pulse)
    # MoveY(0, Y_VALUE, 1/Pulse)
    # MoveZ(1, Z_VALUE, 1/Pulse)
