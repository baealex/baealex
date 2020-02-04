def radixSort(m_list):
    radix_num = -1

    for i in range(3):
        radix = [ [] for i in range(10) ]
        for element in m_list:
            element_digit = list(str(element))
            element_digit_now = 0
            try:
                element_digit_now = int(element_digit[radix_num])
            except IndexError:
                pass
            radix[element_digit_now].append(element)

        m_list = []
        for i in range(10):
            for j in range(len(radix[i])):
                m_list.append(radix[i][j])
        radix_num -= 1
    return m_list

if __name__=="__main__":
    m_list = [3, 100, 40, 49, 65, 16, 43, 34, 77, 54]
    print('원본 리스트 :', m_list)
    sort_list = radixSort(m_list)
    print('정렬 리스트 :', sort_list)