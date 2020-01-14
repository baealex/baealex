
# URL   : https://www.acmicpc.net/problem/2750
# STATE : DONE(2020-01-14)

if __name__=='__main__':
    N = int(input())
    numbers = list()

    for i in range(N):
        numbers.append(int(input()))

    numbers.sort()
    
    for number in numbers:
        print(number)