# URL   : https://www.acmicpc.net/problem/2588
# STATE : DONE(2020-02-04)

A = int(input())
B = input()
for b in B[::-1]:
    print(A * int(b))
print(A * int(B))