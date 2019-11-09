import sys

a = [1,2,3] 
print(sys.getsizeof(a[0]))
print(id(a[0]))
print(id(a[1]))
print(id(a[2]))

print(a)

a.pop(2)
a.append(4)

print(a)

print(id(a[0]))
print(id(a[1]))
print(id(a[2]))