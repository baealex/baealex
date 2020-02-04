
# URL   : https://www.acmicpc.net/problem/8393
# STATE : DONE(2020-02-04)


sum_1_to_n = lambda x: x * (x + 1) // 2

if __name__ == '__main__':
    print(sum_1_to_n(int(input())))