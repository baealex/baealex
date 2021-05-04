import random
import copy
import numpy

# TODO : 중복되어 들어가는 문제
#      : 사이즈를 효율적으로 채우지 않는 문제

def evalution(chromos):
    evalution_value = [0 for __ in range(5)]

    for i in range(5):
        for j in range(5):
            if chromos[i]['size'][j] == 0 :
                break
            evalution_value[i] += float(chromos[i]['value'][j]) / chromos[i]['size'][j]

    return evalution_value

if __name__ == '__main__':
    chromos = [
        {
            'size' : [0, 0, 0, 0, 0],
            'value': [0, 0, 0, 0, 0],
            'index': [-1, -1, -1, -1, -1]
        } for __ in range(5)
    ]
    new_chromos = copy.deepcopy(chromos)

    parent_cromo_index = [0, 0]
    mutation = 0.05

    bag_size_limit = 10
    items = [
        {'size': 3, 'value': 3, 'name': 'Desktop'},
        {'size': 2, 'value': 3, 'name': 'Labtop'},
        {'size': 1, 'value': 2, 'name': 'Map'},
        {'size': 1, 'value': 3, 'name': 'Candy'},
        {'size': 4, 'value': 6, 'name': 'Sleeping Bag'},
        {'size': 1, 'value': 5, 'name': 'Cell Phone'}
    ]

    for i in range(5):
        limit_check = 0
        for j in range(5):
            selected_item_index = random.randint(0, len(items)-1)

            while selected_item_index in chromos[i]['index']:
                selected_item_index = random.randint(0, len(items)-1)

            if limit_check + items[selected_item_index]['size'] <= bag_size_limit:
                limit_check += items[selected_item_index]['size']
                chromos[i]['size'][j] = items[selected_item_index]['size']
                chromos[i]['value'][j] = items[selected_item_index]['value']
                chromos[i]['index'][j] = selected_item_index
            else:
                break

    generation = 0

    while True:
        if generation > 1000:
            # Force stop
            break
        
        evalution_value = evalution(chromos)

        for i in range(2):
            parent_cromo_index[i] = numpy.argsort(evalution_value)[i+3]

        for i in range(5):
            limit_check = 0
            for j in range(5):
                if random.random() > mutation :
                    temp = random.randint(0,1)
                    if limit_check + chromos[parent_cromo_index[temp]]['size'][j] <= bag_size_limit:
                        if chromos[parent_cromo_index[temp]]['index'][j] in chromos[i]['index']:
                            break
                        limit_check += chromos[parent_cromo_index[temp]]['size'][j]
                        new_chromos[i]['size'][j] = chromos[parent_cromo_index[temp]]['size'][j]
                        new_chromos[i]['value'][j] = chromos[parent_cromo_index[temp]]['value'][j]
                        new_chromos[i]['index'][j] = chromos[parent_cromo_index[temp]]['index'][j]
                    else:
                        for k in range(j, 5):
                            new_chromos[i]['size'][k] = 0
                            new_chromos[i]['value'][k] = 0
                            new_chromos[i]['index'][k] = -1
                        break
                else :
                    selected_item_index = random.randint(0, len(items)-1)

                    while selected_item_index in chromos[i]['index']:
                        selected_item_index = random.randint(0, len(items)-1)
                    
                    if limit_check + items[selected_item_index]['size'] <= bag_size_limit:
                        limit_check += items[selected_item_index]['size']
                        new_chromos[i]['size'][j] = items[selected_item_index]['size']
                        new_chromos[i]['value'][j] = items[selected_item_index]['value']
                        new_chromos[i]['index'][j] = selected_item_index
                    else :
                        break

        chromos = copy.deepcopy(new_chromos)

        print("=============================")
        print(generation, "Gen : ", chromos)
        print('evalution value :', evalution_value)
        print('selected parent :', parent_cromo_index)

        generation += 1
    
    print('Computer`s Pick items : ', end='')
    for index in chromos[parent_cromo_index[0]]['index']:
        if index == -1:
            print('')
            break
        print(items[index]['name'], end=', ')