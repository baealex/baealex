
# STATE : NOT YET

import math
import time

#c_time = time.time()

def is_prime(N):
    for i in range(2, int(math.sqrt(N)), 1):
        if N%i == 0:
            return False
    return True

def prime_of_number(N):
    count = 0
    number = 1
    while True:
        number += 1
        if is_prime(number):
            count += 1
        if count == N:
            break
    return number

print(prime_of_number(int(input())))
#print(time.time() - c_time)