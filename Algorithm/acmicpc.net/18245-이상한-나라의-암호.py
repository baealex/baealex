
# STATE : DONE

def decode(_string, count):
    result = ''
    counter = 0
    string_length = len(_string)
    while True:
        result += _string[counter]
        counter += count
        if counter >= string_length:
            break
    return result

if __name__ == '__main__':
    results = []
    count = 2
    while True:
        _string = str(input())
        if _string == 'Was it a cat I saw?':
            break
        else:
            """ TIMEOUT
            results.append(
                [_string[x] for x in range(string_length) if x in [y for y in range(string_length) if y % (count + 1) == 0]]
            )
            """
            results.append(decode(_string, count))
        count += 1
    
    for i in range(len(results)):
        print(results[i])