# 03-1-1 
"""
a = "Life is to short, you need python"

if 'wife' in a:
    print('wife')
elif 'python' in a and 'you' not in a:
    print('python')
elif 'shirt' not in a:
    print('shirt')
elif 'need' in a:
    print('need')
else:
    print('none')
# """

# 03-2-1
"""
n = 0
i = 0
while i<1000:
    if i%3 == 0:
        n += i
    i+=1
print(n)
# """

# 03-2-2
"""
A = [20, 55, 67, 82, 45, 33, 90, 87, 100, 25]
sum = 0
i = 0
while i < len(A):
    if A[i] >= 50:
        sum += A[i]
    i += 1
print(sum)
# """

# 03-2-3
"""
i = 1
temp = 0
while True:
    temp = i
    print("*" * i)
    i += 1
    if i > 4:
        break
# """

# 03-3-1
"""
for i in range(100):
    print(i+1)
# """

# 03-3-2
"""
A = [70, 60, 55, 75, 95, 90, 80, 80, 85, 100]
mSum = 0
for x in A:
    mSum += x
print(mSum/len(A))
# """

# 03-3-3
"""
number = [1, 2, 3, 4, 5]
result = [x * 2 for x in number if x%2==1]
print(result)
# """
