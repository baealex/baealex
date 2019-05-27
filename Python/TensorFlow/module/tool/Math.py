
# coding: utf-8

# In[ ]:

def roundsu(su1):
    su1 = su1 + 0.5
    return str(int(su1))

def tot(*args): # 가변 인수, 전달받은 수의 합계
    tot = 0
    for su in args:
        tot = tot + su
    return tot

