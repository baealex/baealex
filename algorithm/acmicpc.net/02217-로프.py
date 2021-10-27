
# URL   : https://www.acmicpc.net/problem/2217
# STATE : DONE(2020-02-06)

import sys

if __name__ == '__main__':
    N = int(sys.stdin.readline().strip())
    ropes = list()
    for i in range(N):
        ropes.append(int(sys.stdin.readline().strip()))
    ropes.sort()
    
    used_ropes = list()
    max_weight = 0
    for i in range(N):
        if ropes:
            used_ropes.append(ropes.pop())
            max_weight = max(max_weight, used_ropes[i] * len(used_ropes))
        else:
            break
    print(max_weight)