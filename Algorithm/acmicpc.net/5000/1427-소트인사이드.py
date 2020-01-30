
# URL   : https://www.acmicpc.net/problem/1427
# STATE : DONE(2020-01-31)

if __name__ == '__main__':
    numbers = list()
    for x in str(int(input())):
        numbers.append(x)
    numbers.sort(reverse=True)
    print(*numbers, sep='')