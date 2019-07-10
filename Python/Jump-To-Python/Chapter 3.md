### 1. if문

**[문제1] 조건문**

다음 코드의 결과값은 무엇일까?

```
>>> a = "Life is too short, you need python"
>>> if 'wife' in a:
...     print('wife')
... elif 'python' in a and 'you' not in a:
...     print('python')
... elif 'shirt' not in a:
...     print('shirt')
... elif 'need' in a:
...     print('need')
... else:
...     print('none')
```

### 2. while문

**[문제1] 3의 배수의 합**

1부터 1000까지의 자연수 중 3의 배수의 합을 구하시오.

**[문제2] 50점 이상의 총합**

다음은 A학급 학생의 점수를 나타내는 리스트이다. 다음 리스트에서 50점 이상의 점수들의 총합을 구하시오.

A = [20, 55, 67, 82, 45, 33, 90, 87, 100, 25]

**[문제3] 별 표시하기1**

while문을 이용하여 아래와 같이 별(*)을 표시하는 프로그램을 작성해 보자.

```
*
**
***
****
```

### 3. for문

**[문제1] 1부터 100까지 출력**

1부터 100까지의 숫자를 for문을 이용하여 출력하시오.

**[문제2] 학급의 평균 점수**

for문을 이용하여 A 학급의 평균 점수를 구해 보자.

A = [70, 60, 55, 75, 95, 90, 80, 80, 85, 100]

**[문제3] 리스트 내포**

리스트 중에서 홀수에만 2를 곱하여 저장하는 다음과 같은 코드가 있다.

```
numbers = [1, 2, 3, 4, 5]

result = []
for n in numbers:
    if n % 2 == 1:
        result.append(n*2)
```

위 코드를 리스트 내포(list comprehension)를 이용하여 표현하시오.

## My Answer

##### 1-1

> shirt

##### 2-1

```py
i = 0
sum = 0
while i < 1000:
    if i % 3 == 0:
       sum += i
    i += 1
print(sum)
```

##### 2-2

```py
A = [20, 55, 67, 82, 45, 33, 90, 87, 100, 25]
sum = 0
i = 0
while i < len(A):
    if A[i] >= 50:
        sum += A[i]
    i += 1
print(sum)
```

##### 2-3

```py
i = 1
temp = 0
while True:
    temp = i
    print("*" * i)
    i += 1
    if i > 4:
        break
```

##### 3-1

```py
for i in range(100):
    print(i+1)
```

##### 3-2

```py
A = [70, 60, 55, 75, 95, 90, 80, 80, 85, 100]
mSum = 0
for x in A:
    mSum += x
print(mSum/len(A))
```

##### 3-3

```py
number = [1, 2, 3, 4, 5]
result = [x * 2 for x in number if x%2==1]
print(result)
```