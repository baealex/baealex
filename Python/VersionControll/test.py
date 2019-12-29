#-*- coding:utf-8 -*-

def is_change(old_text, new_text):
    if len(old_text) == len(new_text):
        if len(set(old_text) - set(new_text)) == 0:
            return False
    return True

old_text = ["가다", 0]
new_text = ["가다", 1]

print(is_change(old_text[0], new_text[0])) # True