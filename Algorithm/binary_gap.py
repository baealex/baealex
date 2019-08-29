def createBinary(N):
    result = ''
    while True:
        if N == 0 or N == 1:
            result += str(N)
            break
        result += str(N%2)
        N -= N%2
        N /= 2
        N = int(N)
    return result[::-1]
    

def solution(N):
    binary = createBinary(N)
    print(binary)
    startPoint = -1
    endPoint = -1
    maxLength = 0
    tempLength = 0
    
    for point in range(len(binary)):
        if binary[point] == '1' and startPoint == -1:
            startPoint = point
        elif binary[point] == '1' and not startPoint == -1:
            endPoint = point
        if not startPoint == -1 and not endPoint == -1:
            tempLength = endPoint - startPoint -1
            if tempLength > maxLength:
                maxLength = tempLength
            endPoint = -1
            startPoint = -1
    
    return maxLength

print(solution(1041))