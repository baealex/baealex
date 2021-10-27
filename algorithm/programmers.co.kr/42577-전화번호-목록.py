
# URL   : https://programmers.co.kr/learn/courses/30/lessons/42577
# STATE : DONE(2021-10-21)

def solution(phone_book):
    book_map = {}

    for phone in phone_book:
        book_map[phone] = True

    for phone in phone_book:
        for length in range(1, len(phone)):
            try:
                if book_map[phone[0:length]]:
                    return False
            except:
                pass

    return True