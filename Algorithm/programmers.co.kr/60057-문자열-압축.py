
# URL   : https://programmers.co.kr/learn/courses/30/lessons/60057
# STATE : DONE(2021-09-14)

def solution(s):
    minimum_length = len(s)
    
    for bundle_number in range(1, int(len(s) / 2) + 1):
        prev_bundle = ''
        bundle_counter = 0

        compressed_str = ''
    
        prev_slice_pointer = 0
        while True:
            if prev_slice_pointer > len(s):
                break
                
            next_slice_pointer = prev_slice_pointer + bundle_number
            prev_bundle = s[prev_slice_pointer:next_slice_pointer]

            prev_slice_pointer = next_slice_pointer
            next_slice_pointer = next_slice_pointer + bundle_number

            next_bundle = s[prev_slice_pointer:next_slice_pointer]
            
            if prev_bundle == next_bundle:
                bundle_counter += 1
                continue
            
            counter = ''
            if bundle_counter == 0:
                counter = ''
            else:
                counter = bundle_counter + 1
                bundle_counter = 0
                
            compressed_str += f'{counter}{prev_bundle}'
        
        if len(compressed_str) < minimum_length:
            minimum_length = len(compressed_str)
    
    return minimum_length