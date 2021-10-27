
# URL   : https://www.acmicpc.net/problem/1330
# STATE : DONE(2020-02-04)

A, B = map(int, input().split())
if A > B:
    print('>')
elif A < B:
    print('<')
elif A == B:
    print('==')