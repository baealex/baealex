
# URL   : https://www.acmicpc.net/problem/11721
# STATE : DONE(2020-01-27)

def get_page(ele, page, paginator=10):
    return ele[(page-1)*paginator:page*paginator]

if __name__ == '__main__':
    N = input()
    for page in range(1, int(len(N)/10) + 2):
        print(get_page(N, page))