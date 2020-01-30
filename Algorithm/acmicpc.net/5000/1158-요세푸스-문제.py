
# URL   : https://www.acmicpc.net/problem/1158
# STATE : DONE(2020-01-31)

class Josephus:
    josephus_list = list()

    def __init__(self, N, K):
        array_list = [x for x in range(1, N + 1)]
        
        index = 0
        while not len(array_list) == 0:
            index += K-1
            if index >= len(array_list):
                index %= len(array_list)
            self.josephus_list.append(array_list[index])
            del array_list[index]
    
    def __str__(self):
        return str(self.josephus_list).replace('[', '<').replace(']', '>')

if __name__ == '__main__':
    N, K = map(int, input().split())
    print(Josephus(N, K))