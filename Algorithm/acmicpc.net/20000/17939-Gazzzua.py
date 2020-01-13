
# STATE : DONE

def max_dict(lists):
    index = 0
    value = 0

    for i in range(len(lists)):
        if value < lists[i]:
            value = lists[i]
            index = i

    return {
        'value': value,
        'index': index,
    }

if __name__ == '__main__':
    N = int(input())
    price_lists = list(map(int, input().split()))
    benefit = 0
    index = 0

    while True:
        max_price = max_dict(price_lists)
        for i in range(max_price['index']):
            benefit += (max_price['value'] - price_lists[i])

        price_lists = price_lists[max_price['index'] + 1:]
        if len(price_lists) == 0:
            break

    print(benefit)