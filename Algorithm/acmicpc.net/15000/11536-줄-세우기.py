
# URL   : https://www.acmicpc.net/problem/11536
# STATE : DONE(2020-01-14)

"""
def trans_string_to_number(m_string, weight):
    result = 0
    weight = weight
    for x in m_string:
        result += (ord(x) * max_len)
        max_len -= 1
    return result
"""

def find_rule(m_list):
    last_index = len(m_list) - 1
    sorted_list = sorted(m_list)
    DECREASING = False
    INCREASING = False
    
    if m_list[0] == sorted_list[0]:
        INCREASING = True
        for i in range(1, last_index):
            if not m_list[i] == sorted_list[i]:
                INCREASING = False
                break
    elif m_list[0] == sorted_list[last_index]:
        DECREASING = True
        for i in range(1, last_index):
            if not m_list[i] == sorted_list[last_index - i]:
                DECREASING = False
                break
    
    if INCREASING:
        return 'INCREASING'
    elif DECREASING:
        return 'DECREASING'
    elif (INCREASING and DECREASING) or (not INCREASING and not DECREASING):
        return 'NEITHER'

if __name__ == '__main__':
    N = int(input())
    names = list()
    # max_len = 0

    for i in range(N):
        m_string = str(input())
        names.append(m_string)
        """
        m_string_len = len(m_string)
        if max_len < m_string_len:
            max_len = m_string_len
        """
    """
    names_number = list()
    for i in range(N):
        names_number.append(
            trans_string_to_number(names[i], max_len)
        )
    """

    print(find_rule(names))