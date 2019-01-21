# initializing
init = input()
init = init.split()                                                     
N = int(init[0]) # max room size
Q = int(init[1]) # number of repeat
state_room = {}                                                         
for n in range(N) :
    state_room[n] = -1
room = 0
                                                                        
# [0]roomPeople [1]roomSize [2]roomL [3]roomR
assignRoom = []                                                         
                                                                        
for i in range(Q) :
    command = input()
    command_parsing = command.split()                                   
    X = int(command_parsing[1])
    Y = int(command_parsing[2])
                                                                        
    if X > 2147483647 :
        X = 2147483647
                                                                        
    if command_parsing[0] == "new" :
        sum = 0
        for x in range(room) :
            sum += assignRoom[x][1]
        sum += Y
        if sum > N :
            print("REJECTED")
            continue
                                                                        
        check_point = 0
        count = 0
        for x in range(N) :
            if state_room[x] == -1 :
                if count == 0 :
                    check_point = x                                     
                count += 1
                if count == Y :
                    break
            else :
                check_point = -1
                count = 0
        if count != Y :
            print("REJECTED")
            continue
        if check_point == -1 :
            print("REJECTED")
            continue

        for x in range(check_point, check_point + Y) :
            state_room[x] = room                                        

        temp_x, temp_y = X, Y                                           
        temp = [temp_x, temp_y, check_point, check_point + Y - 1]
        assignRoom.append(temp)                                         
        print("%d %d" % (assignRoom[room][2]+1, assignRoom[room][3]+1))
        room += 1
        
    elif command_parsing[0] == "in" :
        if X > room :
            continue
        assignRoom[X-1][0] += Y
                                                                        
    elif command_parsing[0] == "out" :
        if X > room :
            continue
        assignRoom[X-1][0] -= Y
        if assignRoom[X-1][0] <= 0 :
            print("CLEAN %d %d" % (assignRoom[X-1][2]+1, assignRoom[X-1][3]+1))
            for x in range(assignRoom[X-1][2], assignRoom[X-1][3]+1) :
                state_room[x] = -1
            assignRoom[X-1][1] = 0