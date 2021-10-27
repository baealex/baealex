
# URL   : https://www.acmicpc.net/problem/11650
# STATE : DONE(2020-02-06)

if __name__ == '__main__':
    N = int(input())
    points = list()
    
    for i in range(N):
        X, Y = map(int, input().split())
        points.append({
            'X': X,
            'Y': Y,
        })
    
    sort_points = sorted(points, key=lambda x: (x['X'], x['Y']))
    for point in sort_points:
        print(point['X'], point['Y'])