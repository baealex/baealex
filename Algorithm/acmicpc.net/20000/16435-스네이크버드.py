
# URL   : https://www.acmicpc.net/problem/16435
# STATE : DONE(2020-01-21)

def maximun_snake_length(snake_length, hs):
    hs.sort()
    index = 0
    while True:
        if index < len(hs) and hs[index] <= snake_length:
            index += 1
        else:
            snake_length += index
            hs = hs[index:]
            if index == 0:
                return snake_length
            index = 0

if __name__ == '__main__':
    N, snake_length = map(int, input().split())
    H = list(map(int, input().split()))
    print(maximun_snake_length(snake_length, H))