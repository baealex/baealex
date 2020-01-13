
# STATE : NOT YET

if __name__ == '__main__':
    N = int(input())
    price_lists = list(map(int, input().split()))
    
    item_lists = []
    last_price = 0
    benefit = 0

    for i in range(N - 1):
        if not last_price < price_lists[i+1]:
            if item_lists:
                for i in range(item_lists):
                    benefit += (last_price - item_lists[i])
                    item_lists.remove(i)

        if price_lists[i] < price_lists[i+1]:
            item_lists.append(price_lists[i])
            

        last_price = price_lists[i]
    print(benefit)
