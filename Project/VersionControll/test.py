#-*- coding:utf-8 -*-

def is_changed(old_text, new_text):
    if len(old_text) == len(new_text):
        if len(set(old_text) - set(new_text)) == 0:
            return False
    return True

def changed_list(old_text, new_text):
    point = 0
    data = {
        'results': list(),
    }

    new_list = {
        'point': int(),
        'old': str(),
        'new': str()
    }
    while True:
        if not old_text[point] == new_text[point]:
            new_list['point'] = point
            new_list['old'] += old_text[point]
            new_list['new'] += new_text[point]
            break
        point += 1
    data['results'].append(new_list)
    return data

import re
def remove_common(old_text, new_text):
    old_word_lists = re.split(' |\n', old_text)
    new_word_lists = re.split(' |\n', new_text)
    return {
        'old': set(old_word_lists) - set(new_word_lists),
        'new': set(new_word_lists) - set(old_word_lists), 
    }

for i in remove_common(old_text[0], new_text[0])['new']:
    print(i)
print('-----')
for i in remove_common(old_text[0], new_text[0])['old']:
    print(i)