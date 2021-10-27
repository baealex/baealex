
# URL   : https://www.acmicpc.net/problem/1312
# STATE : DONE(2021-09-12)

import math

A, B, N = map(int, input().split())

acc = ''
cur = A

for i in range(N + 1):
    acc += str(math.floor(cur / B))
    cur = cur % B
    cur *= 10

print(acc[-1])