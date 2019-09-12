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

def heapSort(m_list):
    length = len(m_list)
    m_heap = Heap()
    for element in m_list:
        m_heap.insertElement(element)
    result = []
    for i in range(length):
        result.append(m_heap.deleteRoot())
        print(result)
    return result

if __name__=="__main__":
    m_list = [3, 100, 40, 49, 65, 16, 43, 34, 77, 54]
    print('원본 리스트 :', m_list)
    sort_list = heapSort(m_list)
    print('정렬 리스트 :', sort_list)