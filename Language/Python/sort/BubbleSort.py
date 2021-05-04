def bubbleSort(m_list):
    length = len(m_list)

    for i in range(length):
        for j in range((length-1)-i):
            if m_list[j] < m_list[j+1]:
                temp = m_list[j]
                m_list[j] = m_list[j+1]
                m_list[j+1] = temp
    return m_list

if __name__=="__main__":
    m_list = [3, 100, 40, 49, 65, 16, 43, 34, 77, 54]
    print('원본 리스트 :', m_list)
    sort_list = bubbleSort(m_list)
    print('정렬 리스트 :', sort_list)