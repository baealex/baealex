def quick_sort(items):
    pivot = 0
    L = pivot + 1
    R = len(items) - 1

    while pivot != (len(items) - 1):
        for i in range(R, pivot - 1, -1):
            R = i
            if items[R] < items[pivot]:
                break

        for i in range(L, R + 1):
            L = i
            if items[L] > items[pivot]:
                break

        if L < R:
            temp = items[L]
            items[L] = items[R]
            items[R] = temp
            print('마커간 교환 :', items)
            continue

        if R <= L and R > pivot:
            temp = items[pivot]
            items[pivot] = items[R]
            items[R] = temp
            print('피봇과 교환 :', items)
            continue

        if R <= pivot:
            pivot += 1
            L = pivot + 1
            R = len(items) - 1
        
    return items

if __name__=="__main__":
    m_list = [3, 100, 40, 49, 65, 16, 43, 34, 77, 54]
    print('원본 리스트 :', m_list)
    sort_list = quick_sort(m_list)
    print('정렬 리스트 :', sort_list)