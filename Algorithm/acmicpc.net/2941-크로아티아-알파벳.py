
# URL   : https://www.acmicpc.net/problem/2941
# STATE : DONE(2020-02-03)

#-*- coding:utf-8 -*-

class CroatiaAlpabet:
    def __init__(self, alpabets):
        self._matching = {
            'visual': [
                'č', 'ć', 'dž', 'đ', 'lj', 'nj', 'š', 'ž'
            ],
            'parser': [
                'c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='
            ],
            'saving': [
                '!', '@', '#', '$', '%', '^', '&', '*'
            ],
        }
        self._alpabets = alpabets
        self._croatia_alpabets = self.transform(alpabets)

    def transform(self, alpabets):
        temp = alpabets
        for i in range(len(self._matching['parser'])):
            temp = temp.replace(
                self._matching['parser'][i], self._matching['saving'][i])
        return temp

    def show(self):
        temp = self._croatia_alpabets
        for i in range(len(self._matching['parser'])):
            temp = temp.replace(
                self._matching['saving'][i], self._matching['visual'][i])
        return temp

    def count(self):
        return len(self._croatia_alpabets)

if __name__ == '__main__':
    croatia_alpabets = CroatiaAlpabet(input())
    print(croatia_alpabets.count())