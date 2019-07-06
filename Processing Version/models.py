#-*- coding:utf-8 -*-

from time import sleep
import datetime
import pigpio
import views

# 모터 회로 연결 변수
# 각 숫자는 연결된 핀번호를 의미
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
# ------------------

# 모터가 복귀하기 위한 변수
x_move_total = 0
y_move_total = 0
z_move_total = 0
# ------------------

x_now_pos = 0
y_now_pos = 0
z_now_pos = 0

# 모터 사용을 위한 초기화
pi = pigpio.pi()
pi.set_mode(X['STEP'], pigpio.OUTPUT)
pi.set_mode(X['DIR'], pigpio.OUTPUT)
pi.set_mode(Y['STEP'], pigpio.OUTPUT)
pi.set_mode(Y['DIR'], pigpio.OUTPUT)
pi.set_mode(Z['STEP'], pigpio.OUTPUT)
pi.set_mode(Z['DIR'], pigpio.OUTPUT)
# ------------------

# X축 모터 구동 메서드
def MoveX(MOVE_DIR, MOVE_MENT, DELAY):
    global x_move_total
    
    # MOVE_DIR이 0이면 모터 방향으로 움직임
    if MOVE_DIR == 1:
        x_move_total += MOVE_MENT
    else:
        x_move_total -= MOVE_MENT
    
    # 방향 설정후 펄스 반복
    pi.write(X['DIR'], MOVE_DIR)
    for i in range(MOVE_MENT) :
        pi.write(X['STEP'], pigpio.HIGH)
        sleep(DELAY)
        pi.write(X['STEP'], pigpio.LOW)
        sleep(DELAY)
# ------------------

# Y축 모터 구동 메서드
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
# ------------------

# Z축 모터 구동 메서드
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
# ------------------

# 모터의 복귀를 위한 함수
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
# ------------------

# 임시적 생성한 전체 조작
def start_test(NUMBER, SPEED):
    MoveX(1, 50000, 0.00001)
    for i in range(NUMBER):
        MoveY(0, 1000, 1/SPEED)
        MoveZ(1, 3000, 1/SPEED)
        sleep(3)
        MoveZ(0, 3000, 1/SPEED)
    MoveX(1, x_move_total, 1/SPEED)
    MoveY(0, y_move_total, 1/SPEED)
# ------------------
