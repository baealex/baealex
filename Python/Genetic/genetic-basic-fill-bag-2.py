import random
import copy
import numpy

chromo = [
    [[0,0,0,0,0],[0,0,0,0,0],[-1,-1,-1,-1,-1]],
    [[0,0,0,0,0],[0,0,0,0,0],[-1,-1,-1,-1,-1]],
    [[0,0,0,0,0],[0,0,0,0,0],[-1,-1,-1,-1,-1]],
    [[0,0,0,0,0],[0,0,0,0,0],[-1,-1,-1,-1,-1]],
    [[0,0,0,0,0],[0,0,0,0,0],[-1,-1,-1,-1,-1]]
    ]
new_chromo = [
    [[0,0,0,0,0],[0,0,0,0,0],[-1,-1,-1,-1,-1]],
    [[0,0,0,0,0],[0,0,0,0,0],[-1,-1,-1,-1,-1]],
    [[0,0,0,0,0],[0,0,0,0,0],[-1,-1,-1,-1,-1]],
    [[0,0,0,0,0],[0,0,0,0,0],[-1,-1,-1,-1,-1]],
    [[0,0,0,0,0],[0,0,0,0,0],[-1,-1,-1,-1,-1]]
]

evoluation = [0,0,0,0,0]
select = [0,0]
mutation = 0.05
bag_limit = 10
item = [[3,3],[5,2],[2,4],[1,1],[4,2],[5,4],[3,2],[3,4],[1,2],[3,7]]

for i in range(5):
    limit_check = 0
    for j in range(5):
        item_select = random.randint(0,len(item)-1)
        while item_select in chromo[i][2]:
            item_select = random.randint(0,len(item)-1)
        if limit_check + item[item_select][0] < bag_limit+1 :
            limit_check += item[item_select][0]
            chromo[i][0][j] = item[item_select][0]
            chromo[i][1][j] = item[item_select][1]
            chromo[i][2][j] = item_select
        else :
            break

generation = 0
print("Generation",generation,chromo)

while(1):
    for i in range(5):
        for j in range(5):
            if chromo[i][0][j] == 0 :
                break
            evoluation[i] += float(chromo[i][1][j]) / chromo[i][0][j]

    print evoluation

    for i in range(2):
        select[i] = numpy.argsort(evoluation)[i+3]

    for i in range(5):
        limit_check = 0
        for j in range(5):
            if random.random() > mutation :
                temp = random.randint(0,1)
                if limit_check + chromo[select[temp]][0][j] < bag_limit+1 :
                    if chromo[select[temp]][2][j] in chromo[i][2] :
                        break
                    limit_check += chromo[select[temp]][0][j]
                    new_chromo[i][0][j] = chromo[select[temp]][0][j]
                    new_chromo[i][1][j] = chromo[select[temp]][1][j]
                    new_chromo[i][2][j] = chromo[select[temp]][2][j]
                else :
                    for k in range(j,5):
                        new_chromo[i][0][k] = 0
                        new_chromo[i][1][k] = 0
                        new_chromo[i][2][k] = -1
                    break
            else :
                item_select = random.randint(0,len(item)-1)
                while item_select in chromo[i][2]:
                    item_select = random.randint(0,len(item)-1)
                if limit_check + item[item_select][0] < bag_limit+1 :
                    limit_check += item[item_select][0]
                    new_chromo[i][0][j] = item[item_select][0]
                    new_chromo[i][1][j] = item[item_select][1]
                    new_chromo[i][2][j] = item_select
                else :
                    break

    for i in range(5):
        evoluation[i] = 0

    chromo = copy.deepcopy(new_chromo)
    generation += 1
    print("Generation",generation,chromo)

    if generation > 1000:
        break