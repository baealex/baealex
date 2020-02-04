
# STATE : NOT YET

"""
INPUT

12 2
3 5
1 1

형택이가 늘려야 하는 고객 수 C, 도시의 갯수 N
각 도시의 홍보비 {1}, 늘어나는 고객 {2}
"""

"""
RESULT

8

형택이가 투자해야하는 최소 금액
"""

def cal_value_per_moeny(person, money):
    if money == 0:
        return False
    return person/money

if __name__ == '__main__':
    C, N = map(int, input().split())
    
    city = { 'data': list() }
    for i in range(N):
        money, person = map(int, input().split())
        city['data'].append({
            'money': money,
            'person': person,
            'value': cal_value_per_moeny(person, money)
        })
    city['data'] = sorted(city['data'], key=lambda x: x['value'], reverse=True)
    
    left_client = C
    result_money = 0
    for i in range(N):
        if left_client < city['data'][i]['person']:
            result_money += city['data'][i]['money']
            break
        result_money += (int(left_client/city['data'][i]['person'])
            * city['data'][i]['money'])
        left_client %= city['data'][i]['person']
    print(result_money)