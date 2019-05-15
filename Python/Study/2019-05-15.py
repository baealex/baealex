#-*- coding:utf-8 -*-

# 04-2-1
"""
input1 = input("첫번째 숫자를 입력하세요 : ")
input2 = input("두번째 숫자를 입력하세요 : ")

total = int(input1) + int(input2)
print("두 수의 합은 %s 입니다." % total)
# """

# 04-2-2
"""
mInput = input()
mSum = 0

mInputSplit = mInput.split(',')
print(mInputSplit)

for i in range(len(mInputSplit)):
	mSum += int(mInputSplit[i])
	
print(mSum)
# """

# 04-3-1
"""
f1 = open("test.txt", 'w')
f1.write("Life is too short")
f1.close()

f2 = open("test.txt", 'r')
print(f2.read())
f2.close()
# """

# 04-3-2
"""
while 1:
	mInput = input()
	f1 = open("test.txt", 'a')
	f1.write(mInput)
	f1.close()
# """

# 04-3-3
"""
f1 = open("abc.txt", 'w')
init_text = "AAA\nBBB\nCCC\nDDD\nEEE\n"
f1.write(init_text)
f1.close()

f2 = open("abc.txt", 'r')
read_text = f2.readlines()
read_text.reverse()
f2.close()

f3 = open("abc.txt", 'w')
for text in read_text:
	f3.write(text)
f3.close()
# """

# 04-3-4
"""
f1 = open("test.txt", 'w')
init_text = "Life is too short\nyou need java\n"
f1.write(init_text)
f1.close()

f2 = open("test.txt", 'r')
read_text = f2.readlines()
f2.close()

f3 = open("test.txt", 'w')
for text in read_text:
	if not text.find('java') == -1:
		text = text.replace('java', 'python')
	f3.write(text)
	print(text)
f3.close()
# """

# 04-3-5
"""
f1 = open("test.txt", 'w')
init_text = "70\n60\n55\n75\n95\n90\n80\n80\n85\n100\n"
f1.write(init_text)
f1.close()

f2 = open("test.txt", 'r')
read_text = f2.readlines()
f2.close()

mSum = 0
for text in read_text:
	mSum += int(text)

print("Sum : " + str(mSum))
print("Avg : " + str(mSum/len(read_text)))
"""