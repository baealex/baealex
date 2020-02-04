
# URL   : https://www.acmicpc.net/problem/1149
# STATE : FAIL

def min_color(R, G, B):
    if R < G and R < B:
        return {
            'color': 'RED',
            'value': R,
        }
    if G < R and G < B:
        return {
            'color': 'GREEN',
            'value': G,
        }
    if B < R and B < R:
        return {
            'color': 'BLUE',
            'value': B,
        }
    return None

if __name__ == '__main__':
    N = int(input())
    color_sum = 0
    neighbor_house_color = str()
    for i in range(N):
        R, G, B = map(int, input().split())
        now_min_color = min_color(R, G, B)
        if not now_min_color['color'] == neighbor_house_color:
            color_sum += now_min_color['value']
            neighbor_house_color = now_min_color['color']
        else:
            if now_min_color['color'] == 'RED':
                if G < B:
                    color_sum += G
                    neighbor_house_color = 'GREEN'
                else:
                    color_sum += B
                    neighbor_house_color = 'BLUE'
            if now_min_color['color'] == 'GREEN':
                if R < B:
                    color_sum += R
                    neighbor_house_color = 'RED'
                else:
                    color_sum += B
                    neighbor_house_color = 'BLUE'
            if now_min_color['color'] == 'BLUE':
                if R < G:
                    color_sum += R
                    neighbor_house_color = 'RED'
                else:
                    color_sum += G
                    neighbor_house_color = 'GREEN'
    print(color_sum)