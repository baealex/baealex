
# URL   : https://www.acmicpc.net/problem/15926
# STATE : DONE(2020-01-22)

if __name__=='__main__':
    n = int(input())
    brackets = input()
    brackets_clean = [0] * n

    stack = list()

    for index, bracket in enumerate(brackets):
        brackets_clean[index] = 0
        if bracket == '(':
            stack.append(index)
        else:
            if stack:
                brackets_clean[stack.pop()] = 1
                brackets_clean[index] = 1

    counter = {
        'max': 0,
        'now': 0,
    }

    for i in range(len(brackets_clean)):
        if brackets_clean[i] == 1:
            counter['now'] += 1
            continue
        if brackets_clean[i] == 0:
            if counter['max'] < counter['now']:
                counter['max'] = counter['now']
            counter['now'] = 0
    
    print(counter['max'] if counter['now'] < counter['max'] else counter['now'])