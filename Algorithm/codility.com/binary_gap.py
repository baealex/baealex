def trans_binary(N):
    result = ''
    while True:
        result += str(N%2)
        N -= N%2
        N = int(N/2)
        if(N == 0 or N == 1):
            result += str(N)
            break
    return result[::-1]

def solution(N):
    # write your code in Python 3.6
    firstPoint = -1
    lastPoint = -1
    maxLength = 0
    tempLength = 0
    
    binaryN = trans_binary(N)
    for i in range(len(binaryN)):
        if binaryN[i] == '1':
            if firstPoint == -1:
                firstPoint = i
            elif not firstPoint == -1 and lastPoint == -1:
                lastPoint = i
                tempLength = lastPoint - firstPoint - 1
                if tempLength > maxLength:
                    maxLength = tempLength
                lastPoint = -1
                firstPoint = i
    return maxLength