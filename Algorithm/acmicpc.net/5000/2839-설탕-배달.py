
# URL   : https://www.acmicpc.net/problem/2839
# STATE : DONE(2020-01-23)

if __name__=='__main__':
    N = int(input())

    five, three = 0, 0
    
    if N >= 5:
        five = N // 5
        N %= 5

    while five > 0:
        if not N % 3 == 0:
            if five > 0:
                five -= 1
                N += 5
        if N % 3 == 0:
            three = N // 3
            N %= 3
            break

    if N == 0:
        print(str(five + three))
    elif N == 3:
        print(str(1))
    else:
        print(str(-1))