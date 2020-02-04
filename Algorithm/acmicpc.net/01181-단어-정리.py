
# URL   : https://www.acmicpc.net/problem/1181
# STATE : DONE(2020-01-16)

if __name__=='__main__':
    N = int(input())
    words = list()
    words_set = tuple()
    
    for i in range(N):
        word = str(input())
        if not word in words_set:
            words.append({
                'word': word,
                'len': len(word),
            })
        words_set += (word,)
    
    words = sorted(words, key=lambda x : (x['len'], x['word']))

    for x in words:
        print(x['word'])

"""
# STATE : FAIL(2020-01-16)

각 자리수에 가중치를 적용하고 아스키코드로
변화한 값을 적용하면 원하는 정렬이 될 것이라 생각했다.
제시된 케이스에는 가능했지만 결과는 틀렸다.
아마도 길이가 긴 문자열의 숫자 크기가
정수 최대 크기를 넘는게 문제가 아닐까 생각한다.

def trans_string_to_number(m_string):
    result = 0
    weight = 2 ** len(m_string)
    for x in m_string:
        result += (ord(x) * weight)
        weight /= 2
    return result

if __name__=='__main__':
    N = int(input())
    words = list()
    words_set = tuple()
    
    for i in range(N):
        word = str(input())
        if not word in words_set:
            words.append({
                'word': word,
                'number': trans_string_to_number(word),
            })
        words_set += (word,)
    
    words = sorted(words, key=lambda x : x['number'])

    for x in words:
        print(x['word'])
"""