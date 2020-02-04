
# URL   : https://www.acmicpc.net/problem/2751
# STATE : DONE(2020-02-02)

"""
문제점 분석 : 

# METHOD 1 : 탐색 트리를 이용하여 시도했으나 '시간초과' 발생함
# METHOD 2 : 기존에 만들어둔 히프 자료구조를 활용하려고 했으나 오름차순 정렬로 만들어 둔 거라서 나중에 변경하여 시도해 볼 예정
# METHOD 3 : 파이썬의 기본 정렬은 충분히 빠르므로 리스트를 버킷 형태로 여러개로 나뉘어 값을 넣고 정렬한 뒤 값을 빼려고 하였음
             '시간초과' 발생, input() 보다 sys.stdin.readline()을 사용하라고하여 변경하였음
             '런타임 에러' 발생, pop()시 기본 인덱스가 0인 것에서 비롯된 것으로 보임 수정후 정답처리됨

=> 첫번째 방법에 input()을 sys.stdin.readline()으로 변경해도 시간초과 발생
"""

import sys

class ListBukkit:
    def __init__(self, size):
        self._bukkit = dict()
        self._flag = 0
        self._size = size

        for i in range(self._size):
            self._bukkit[str(i)] = list()
    
    def insert(self, element):
        self._bukkit[str(self._flag)].append(element)
        self._flag += 1
        if self._flag >= self._size:
            self._flag = 0

    def sort(self):
        for i in range(self._size):
            self._bukkit[str(i)].sort(reverse=True)

    def pop(self):
        index = -1
        number = 1000001
        
        for i in range(self._size):
            try:
                if self._bukkit[str(i)][-1] < number:
                    index = i
                    number = self._bukkit[str(i)][-1]
            except:
                continue
        
        try:
            return self._bukkit[str(index)].pop()
        except:
            return None

if __name__ == '__main__':
    list_bukkit = ListBukkit(size=5)

    N = int(input())
    for i in range(N):
        list_bukkit.insert(int(sys.stdin.readline()))
    
    list_bukkit.sort()

    for i in range(N):
        print(list_bukkit.pop())