def selectionSort(m_list):
    length = len(m_list)

    for i in range(length):
        max = { 'value':0, 'index':0 }
        for j in range(i, length):
            if max['value'] < m_list[j]:
                max['value'] = m_list[j]
                max['index'] = j
        temp = m_list[i]
        m_list[i] = m_list[max['index']]
        m_list[max['index']] = temp
    return m_list

if __name__=="__main__":
    m_list = [3, 100, 40, 49, 65, 16, 43, 34, 77, 54]
    print('원본 리스트 :', m_list)
    sort_list = selectionSort(m_list)
    print('정렬 리스트 :', sort_list)