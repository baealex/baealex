#-*- coding:utf-8 -*-

import random
import copy
import numpy

chromo = [[[0,0,0,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0]]]
new_chromo = [[[0,0,0,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0]]]

evoluation = [0,0,0,0,0]
select = [0,0]
mutation = 0.05

# 가방 무게 제한
bag_limit = 10
# 아이템 요소 [부피, 가치]
item = [[3,3],[5,2],[2,4],[1,1],[4,2],[5,4],[3,2],[3,4]]

# 초기 세대 생성
for i in range(5):
    limit_check = 0
    check = False
    for j in range(5):
        item_select = random.randint(0,len(item)-1)
        for k in range(2):
            if k == 0 :
                limit_check += item[item_select][k]
                if limit_check > bag_limit+1 :
                    check = True
                    break
            chromo[i][k][j] = item[item_select][k]
        if check == True :
            break

generation = 0
print("Generation",generation,chromo)

while(1):
    # 적합도 평가
    for i in range(5):
        for j in range(5):
            if chromo[i][0][j] == 0 :
                break
            evoluation[i] += float(chromo[i][1][j]) / chromo[i][0][j]

    # 적합도 출력
    print evoluation

    # 우성 염색체 선택
    for i in range(2):
        # 오름차순으로 정렬되어 뒤에 요소 선택
        select[i] = numpy.argsort(evoluation)[i+3]

    # 교차 및 돌연변이
    for i in range(5):
        limit_check = 0
        for j in range(5):
            # 교차
            if random.random() > mutation :
                temp = random.randint(0,1)
                if limit_check + chromo[select[temp]][0][j] < bag_limit+1 :
                    limit_check += chromo[select[temp]][0][j]
                    new_chromo[i][0][j] = chromo[select[temp]][0][j]
                    new_chromo[i][1][j] = chromo[select[temp]][1][j]
                else :
                    for k in range(j,5):
                        new_chromo[i][0][k] = 0
                        new_chromo[i][1][k] = 0
                    break
            # 돌연변이
            else :
                temp = random.randint(0, len(item)-1)
                if limit_check + item[temp][0] < bag_limit+1 :
                    limit_check += item[temp][0]
                    new_chromo[i][0][j] = item[temp][0]
                    new_chromo[i][1][j] = item[temp][1]
                else :
                    break

    # 적합도 초기화
    for i in range(5):
        evoluation[i] = 0

    chromo = copy.deepcopy(new_chromo)
    generation += 1
    print("Generation",generation,chromo)

    if generation > 10000:
        break
