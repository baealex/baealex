
# URL   : https://www.acmicpc.net/problem/10039
# STATE : DONE(2020-02-03)

avg = lambda x: sum(x)/len(x)

if __name__ == '__main__':
    m_list = list()
    for i in range(5):
        m_score = int(input())
        if m_score < 40:
            m_score = 40
        m_list.append(m_score)

    print(int(avg(m_list)))