
# URL   : https://www.acmicpc.net/problem/1475
# STATE : DONE(2020-01-29)

import math

if __name__ == '__main__':
    numbers = input()
    result = [0] * 10
    
    for x in numbers:
        if x == '9':
            result[6] += 1
            continue
        result[int(x)] += 1
    result[6] = math.ceil(result[6] / 2)

    max = 0
    for x in result:
        if x > max:
            max = x
    
    print(max)