
# URL   : https://www.acmicpc.net/problem/10867
# STATE : DONE(2020-02-05)

if __name__ == '__main__':
    N = int(input())
    N_LIST = list(map(int, input().split()))
    N_LIST_SET_SORT = sorted(set(N_LIST))

    for idx, x in enumerate(N_LIST_SET_SORT):
        if not idx == len(N_LIST_SET_SORT) - 1:
            print(str(x), end=' ')
        else:
            print(str(x))