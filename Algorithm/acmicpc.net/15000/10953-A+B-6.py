
# URL   : https://www.acmicpc.net/problem/10953
# STATE : DONE(2020-02-04)

if __name__ == '__main__'
    N = int(input())
    results = list()
    for i in range(N):
        results.append(sum(map(int, input().split(','))))
    print(*results, sep='\n')