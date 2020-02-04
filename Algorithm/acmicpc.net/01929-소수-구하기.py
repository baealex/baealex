
# URL   : https://www.acmicpc.net/problem/1929
# STATE : DONE(2020-01-20)

import math

def prime_between(M, N):
    prime_lists = list()
    for x in range(2, N + 1):
        is_prime = True
        for y in prime_lists:
            if y > math.sqrt(x):
                break
            if x % y == 0:
                is_prime = False
                break
        if is_prime:
            prime_lists.append(x)
            if x >= M:
                print(x)
            # print(x) # 15.5 ~ 17.5
    
    # print(*prime_lists, sep="\n") # 14.5 ~ 16.5
    
    """
    for i in prime_lists:
        print(i) # 14.7 ~ 18.5
    """

if __name__=='__main__':
    M, N = map(int, input().split())
    prime_between(M, N)