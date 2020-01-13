
# STATE : DONE
# PYTHON2

mString = raw_input()
mString = mString.strip()
mStringSplit = mString.split(' ')

mCount = 0
for i in mStringSplit :
    if len(i) != 0 :
        mCount += 1

print(mCount)