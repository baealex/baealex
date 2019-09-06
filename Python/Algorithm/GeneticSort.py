import random
import copy
import time
import matplotlib.pyplot as plt

def geneticSort(m_list, mode):
    MAX_CHROMO = 50
    mutation = 0.15

    chromo = [random.sample(m_list, len(m_list)) for i in range(MAX_CHROMO)]
    evoluation_value = [0 for i in range(MAX_CHROMO)]
    choice_chromo = [0,0]
    
    while True:
        for i in range(MAX_CHROMO):
            for j in range(len(m_list) - 1):
                if chromo[i][j] < chromo[i][j+1]:
                    evoluation_value[i] += 1
        
        evoluation_max = {
            'first'  : 0,
            'second' : 0,
        }
        for i in range(MAX_CHROMO):
            if evoluation_max['first'] < evoluation_value[i]:
                evoluation_max['first'] = evoluation_value[i]
                choice_chromo[0] = i
                continue
            if evoluation_max['second'] < evoluation_value[i] and i is not choice_chromo[0]:
                evoluation_max['second'] = evoluation_value[i]
                choice_chromo[1] = i

        if mode is 'progress':
            progress = evoluation_max['first']/(len(m_list)-1) * 100
            for i in range(int(progress/10)):
                print('=',end='')
            print('>','%0.2f' % progress,'%')
        elif mode is 'print':
            print(chromo[choice_chromo[0]])
            time.sleep(0.05)

        if (len(m_list)-1) in evoluation_value:
            break

        evoluation_value = [0 for i in range(MAX_CHROMO)]
        new_chromo = []
        for i in range(MAX_CHROMO):
            new_chromo.append(copy.deepcopy(chromo[choice_chromo[random.randint(0, 1)]]))

        for i in range(MAX_CHROMO):
            for j in range(len(m_list)):
                if mutation > random.random():
                    a = random.randint(0, len(new_chromo[i])-1)
                    b = random.randint(0, len(new_chromo[i])-1)
                    temp = new_chromo[i][a]
                    new_chromo[i][a] = new_chromo[i][b]
                    new_chromo[i][b] = temp
    
        if len(m_list)-1 in evoluation_value:
            break
        chromo = copy.deepcopy(new_chromo)
    return chromo[choice_chromo[0]]
    
if __name__=="__main__":
    m_list = [3, 100, 40, 49, 65, 16, 43, 34, 77, 54]
    print('원본 리스트 :', m_list)
    
    current_time = time.time()
    sort_list = geneticSort(m_list, 'none')
    print('정렬 리스트 :', sort_list)
    run_time = float(time.time() - current_time)
    print('실행 시간   :', '%0.2f' % run_time)