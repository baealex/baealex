
# URL   : https://www.acmicpc.net/problem/10989
# STATE : FAIL

"""
문제점 분석 : 

# METHOD 1 : 히프 자료구조 사용, 당연히 시간초과가 나올 줄 알았는데 메모리 초과가 나옴
"""

import sys

class Heap:
    def __init__(self):
        self.array = []

    def __str__(self):
        return str(self.array)

    def insertElement(self, data):
        self.array.append(data)
        length = len(self.array)
        if length > 1:
            node_num = length - 1
            while True:
                next_node_num = int(node_num/2)
                if self.array[next_node_num] < self.array[node_num]:
                    temp = self.array[node_num]
                    self.array[node_num] = self.array[next_node_num]
                    self.array[next_node_num] = temp
                else:
                    break
                node_num = int(node_num/2)
                if node_num == 0:
                    break

    def deleteRoot(self):
        root_value = self.array[0]
        del self.array[0]

        last_index = len(self.array) - 1
        if last_index < 0:
            return root_value
        tail_value = self.array[last_index]
        del self.array[last_index]

        self.array.insert(0, tail_value)
        now_index = 0
        next_index = 0
        while True:
            now_index = next_index
            next_index *= 2
            if next_index + 2 > last_index:
                break
            if self.array[next_index + 1] > self.array[next_index + 2]:
                next_index += 1
            else:
                next_index += 2
            if self.array[now_index] < self.array[next_index]:
                temp = self.array[now_index]
                self.array[now_index] = self.array[next_index]
                self.array[next_index] = temp
        return root_value

if __name__ == '__main__':
    m_heap = Heap()

    N = int(input())
    for i in range(N):
        m_heap.insertElement(int(sys.stdin.readline()))

    for i in range(N):
        print(m_heap.deleteRoot())