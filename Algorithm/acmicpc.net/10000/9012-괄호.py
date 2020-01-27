
# URL   : https://www.acmicpc.net/problem/9012
# STATE : DONE(2020-01-28)

def vps_check(brackets):
    stack = list()
    for bracket in brackets:
        if bracket == '(':
            stack.append('(')
        else:
            if stack:
                stack.pop()
            else:
                return 'NO'
    if stack:
        return 'NO'
    return 'YES'

if __name__ == '__main__':
    T = int(input())
    results = list()
    for case in range(T):
        brackets = input()
        results.append(vps_check(brackets))
    print(*results, sep="\n")