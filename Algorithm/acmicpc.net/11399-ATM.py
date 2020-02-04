
# URL   : https://www.acmicpc.net/problem/11399
# STATE : DONE

def mininum_waiting_time(wait_lists):
    result = 0
    temp_sum = 0

    for x in sorted(wait_lists):
        temp_sum += x
        result += temp_sum

    return result

if __name__=='__main__':
    N = int(input())
    wait_lists = list(map(int, input().split()))
    print(mininum_waiting_time(wait_lists))