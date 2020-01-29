
# URL   : https://www.acmicpc.net/problem/2577
# STATE : DONE(2020-01-29)

if __name__ == '__main__':
    A = int(input())
    B = int(input())
    C = int(input())
    result = [0] * 10
    
    for x in str(A * B * C):
        result[int(x)] += 1
    
    print(*result, sep='\n')