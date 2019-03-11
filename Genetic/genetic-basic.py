import random
import numpy
import copy

chromo = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]]
new_chromo = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]

# 각 염색체의 적합도 평가
evalution = [0,0,0,0,0]
# 우성 유전자
dominant = 1
# 돌연변이가 나타날 확률
mutation = 0.01
# 선택된 우성 염색체
select = [0,0] 
# 세대
gene = 0

# 최초 새대 생성
for i in range(5) :
    for j in range(10) :
        chromo[i][j] = random.randint(0,9)

print(gene,"Gen : ",chromo)
gene+=1

# 완전체가 나올때까지 반복
while(1) :
    # 적합도 평가
    for i in range(5) :
        m_sum = 0
        for j in range(10) :
            if chromo[i][j] > dominant :
                m_sum += chromo[i][j] - dominant
            else :
                m_sum += dominant - chromo[i][j]
        evalution[i] = m_sum

    # 목표 적합도가 있으면 종료
    done = False
    for i in range(5) :
        if evalution[i] == 0 :
            done = True
            break
    if done == True :
        break
    
    # 적합도 출력
    print evalution

    # 우성 염색체 2쌍 선택
    for i in range(2) :
        select[i] = numpy.argsort(evalution)[i]

    # 우성 염색체 출력
    print select

    # 염색체 교차 및 돌연변이
    for i in range(5) :
        for j in range(10) :
            if random.random() < mutation :
                new_chromo[i][j] = random.randint(0,9)
            else :
                new_chromo[i][j] = chromo[select[random.randint(0,1)]][j]

    # 리스트 깊은 복사
    chromo = copy.deepcopy(new_chromo)
    print(gene,"Gen : ",chromo)
    gene+=1

    if gene > 1000 :
        break
    
print("Done!!!")