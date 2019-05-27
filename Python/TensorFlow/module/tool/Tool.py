
# coding: utf-8

# In[ ]:

def maxsu(su1, su2):
    if su1 > su2:
        return su1
    else:
        return su2


def minsu(su1, su2):
    if su1 < su2:
        return su1
    else:
        return su2


def swap(su1, su2):
    temp = su1
    su1 = su2
    su2 = temp
 
    return su1, su2

