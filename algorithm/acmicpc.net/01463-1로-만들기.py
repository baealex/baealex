
# URL   : https://www.acmicpc.net/problem/1463
# STATE : DONE(2020-01-17)

min = lambda x, y : x < y and x or y

if __name__=='__main__':
    N = int(input())

    DP = [0] * ((N + 1) * 3)
    for i in range(1, N+1):
        DP[i + 1] = min(DP[i + 1], DP[i] + 1)
        DP[i * 2] = min(DP[i * 2], DP[i] + 1)
        DP[i * 3] = min(DP[i * 3], DP[i] + 1)
    
    print(DP[N])
