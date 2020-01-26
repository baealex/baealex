
# URL   : https://www.acmicpc.net/problem/1924
# STATE : DONE(2020-01-26)

def get_month_day(month):
    if month == 4 or month == 6 or month == 9 or month == 11:
        return 30
    elif month == 2:
        return 28
    else:
        return 31

def weekday(p_month, p_day):
    day = p_day
    for i in range(1, p_month):
        day += get_month_day(i)
    day %= 7
    if day == 0:
        return 'SUN'
    if day == 1:
        return 'MON'
    if day == 2:
        return 'TUE'
    if day == 3:
        return 'WED'
    if day == 4:
        return 'THU'
    if day == 5:
        return 'FRI'
    if day == 6:
        return 'SAT'

if __name__ == '__main__':
    x, y = map(int, input().split())
    print(weekday(x, y))