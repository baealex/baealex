
# URL   : https://www.acmicpc.net/problem/15965
# STATE : 25 POINT(2020-01-21)

import math

def prime_of_number(K):
    if K == 0:
        return None
    prime_lists = list()
    counter = 0
    x = 2
    while True:
        is_prime = True
        for y in prime_lists:
            if y > math.sqrt(x):
                break
            if x % y == 0:
                is_prime = False
                break
        if is_prime:
            prime_lists.append(x)
            counter += 1
            if counter >= K:
                return prime_lists[counter - 1]
        x += 1

if __name__=='__main__':
    print(prime_of_number(int(input())))