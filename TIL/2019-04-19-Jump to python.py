# 2-01-1
"""
korean = 80
english = 75
mathmatics = 55

print((korean+english+mathmatics)/3)
# """

# 2-01-2
"""
x = int(input("Input Number : "))
if x % 2 == 0:
    print("짝수")
else:
    print("홀수")
# """

# 2-02-1
"""
mr_hong_jumin = "881120-1068234"
mr_hong_jumin_split = mr_hong_jumin.split("-")
print(mr_hong_jumin_split[0])
print(mr_hong_jumin_split[1])

print(mr_hong_jumin[:6])
print(mr_hong_jumin[7:])
# """

# 2-02-2
"""
pin = "881120-1068234"
pin_slpit = pin.split('-')
print(pin_slpit[1][0])
# """

# 2-02-3
"""
mString = "a:b:c:d"
print(mString.replace(":","#"))
# """

# 2-02-4
"""
mString = "a:b:c:d"
print("#".join(mString.split(":")))
# """

# 2-03-1
"""
mList = ['Life','is','too','short']
print(" ".join(mList))
# """

# 2-03-2
"""
mList = [1,3,5,4,2]
mList.sort()
mList.reverse()
print(mList)
# """

# 2-04-1
"""
a = (1,2,3)
a += (4,)
print(a)
# """

# 2-05-1
"""
d = {
    'name':'홍길동',
    'birth':1128,
    'age':30
}
print(d)
# """

# 2-05-2
"""
a = dict()

a['name'] = 'python'
a[('a',)] = 'python'
# a[[1]] = 'python'
a[250] = 'python'

print(a)
# """

# 2-05-3
"""
a = {'A':90, 'B':80}
print(a.get('C', 70))
# """

