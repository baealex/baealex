
# URL   : https://www.acmicpc.net/problem/1157
# STATE : DONE(2020-02-01)

def get_most_used_alphabets(word):
    if len(word) == 1:
        return word.upper()
    
    results = dict()
    for alphabet in word:
        if alphabet.upper() in results:
            results[alphabet.upper()] += 1
        else:
            results[alphabet.upper()] = 1
    
    max_number = int()
    max_alpabet = str()
    for element in sorted(results.items(), key=lambda x: x[1], reverse=True):
        if not max_number:
            max_alpabet = element[0]
            max_number = element[1]
        else:
            if max_number == element[1]:
                return '?'
            else:
                return max_alpabet

if __name__ == '__main__':
    print(get_most_used_alphabets(input()))