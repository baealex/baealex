def insertionSort(m_list):
    length = len(m_list)

    for i in range(1, length):
        if m_list[i] < m_list[i-1]:
            for j in range(i, 0, -1):
                if m_list[j] < m_list[j-1]:
                    temp = m_list[j]
                    m_list[j] = m_list[j-1]
                    m_list[j-1] = temp
                else:
                    break
    return m_list

if __name__=="__main__":
    m_list = [3, 100, 40, 49, 65, 16, 43, 34, 77, 54]
    print('원본 리스트 :', m_list)
    sort_list = insertionSort(m_list)
    print('정렬 리스트 :', sort_list)