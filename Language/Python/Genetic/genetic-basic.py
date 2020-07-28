#-*- coding:utf-8 -*-

import random
import numpy
import copy

def evalution(chromos):
    evalution_value = [0 for __ in range(5)]
    
    dominant = 1

    for i in range(5):
        m_sum = 0
        for j in range(10):
            if chromos[i][j] > dominant:
                m_sum += chromos[i][j] - dominant
            else:
                m_sum += dominant - chromos[i][j]
        evalution_value[i] = m_sum
    
    return evalution_value

if __name__ == '__main__':
    chromos     = [[0 for __ in range(10)] for __ in range(5)]
    new_chromos = copy.deepcopy(chromos)

    mutation = 0.01
    
    parent_cromo_index = [0, 0]
    generation = 0

    # 1 Generation
    for i in range(5):
        for j in range(10):
            chromos[i][j] = random.randint(0, 9)

    generation += 1

    while True:
        if generation > 1000:
            # Force stop
            break

        evalution_value = evalution(chromos)
        
        for i in range(2):
            parent_cromo_index[i] = numpy.argsort(evalution_value)[i]

        done = False
        for i in range(5):
            if evalution_value[i] == 0:
                done = True
                break
        if done == True:
            break

        # 염색체 교차 및 돌연변이
        for i in range(5):
            for j in range(10):
                if random.random() < mutation:
                    new_chromos[i][j] = random.randint(0, 9)
                else:
                    new_chromos[i][j] = chromos[parent_cromo_index[random.randint(0, 1)]][j]

        chromos = copy.deepcopy(new_chromos)

        print("=============================")
        print(generation, "Gen : ", chromos)
        print('evalution value :', evalution_value)
        print('selected parent :', parent_cromo_index)

        generation += 1
        
    print("Done!!!")