def solution(s):
    min_len = len(s)
    
    for i in range(1, int(len(s) / 2) + 1):
        now_str = ''
        now_count = 0
        maked_str = ''
    
        idx = 0
        while True:
            now_str = s[idx:idx+i]
            
            if idx > len(s):
                break
            idx += i 
            
            if now_str == s[idx:idx+i]:
                now_count += 1
            else:
                count = ''
                if now_count == 0:
                    count = ''
                else:
                    count = now_count + 1
                    now_count = 0
                    
                maked_str += f'{count}{now_str}'
        
        maked_len = len(maked_str)
        if maked_len < min_len:
            min_len = maked_len
    
    return min_len