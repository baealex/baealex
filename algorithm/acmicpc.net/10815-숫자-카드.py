
# URL   : https://www.acmicpc.net/problem/10815
# STATE : DONE(2020-02-04)

"""
문제점 분석 : 

# METHOD 1 : 처음엔 입력받은 리스트를 곧바로 순회하여 결과를 출력하였으나 '시간초과' 발생함
             1 - 과도한 리스트 순회가 문제?
             2 - 결과 리스트의 replace가 문제?
             위 두가지중 어떤게 치명적인지 모르겠음
# METHOD 2 : 중복되는 값 없으므로 차집합을 순회하여 1번을 개선함
             순회하면서 즉각적으로 결과를 출력하여 2번을 개선함
"""

if __name__ == '__main__':
    N = int(input())
    N_LIST = list(map(int, input().split()))

    M = int(input())
    M_LIST = list(map(int, input().split()))

    difference_element = set(M_LIST) - set(N_LIST)

    results = list()
    for i in range(M):
        if M_LIST[i] in difference_element:
            print(str(0), end='')
        else:
            print(str(1), end='')
        
        if not i == M - 1:
            print(' ', end='')
    print()