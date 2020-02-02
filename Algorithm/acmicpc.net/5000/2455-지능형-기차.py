
# URL   : https://www.acmicpc.net/problem/2455
# STATE : DONE(2020-02-03)

if __name__ == '__main__':
    inside_person = 0
    max_inside_person = 0

    for i in range(4):
        out_person, came_person = map(int, input().split())
        inside_person = inside_person - out_person + came_person
        if max_inside_person < inside_person:
            max_inside_person = inside_person
    
    print(max_inside_person)