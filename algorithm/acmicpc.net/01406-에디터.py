
# URL   : https://www.acmicpc.net/problem/1406
# HELP  : https://www.ics.uci.edu/~pattis/ICS-33/lectures/complexitypython.txt
# STATE : DONE(2020-02-05)

"""
class Editor:
    def __init__(self, text):
        self.text = text
        self.cursur = len(text)

    def cursur_move(self, arrow, count=1):
        if arrow == 'LEFT':
            self.cursur -= count
            if self.cursur < 0:
                self.cursur = 0
        if arrow == 'RIGHT':
            self.cursur += count
            if self.cursur > len(self.text):
                self.cursur = len(self.text)

    def insert(self, char):
        self.text = self.text[:self.cursur] + char + self.text[self.cursur:]
        self.cursur_move('RIGHT', len(char))

    def backspace(self):
        if self.cursur - 1 < 0:
            pass
        else:
            self.text = self.text[:self.cursur - 1] + self.text[self.cursur:]
            self.cursur_move('LEFT')
"""

import sys

class Editor:
    def __init__(self, text):
        self.header_text_stack = list(text)
        self.rear_text_stack = list()

    def cursur_move(self, arrow):
        if arrow == 'LEFT':
            if self.header_text_stack:
                self.rear_text_stack.append(self.header_text_stack.pop())
        if arrow == 'RIGHT':
            if self.rear_text_stack:
                self.header_text_stack.append(self.rear_text_stack.pop())

    def insert(self, char):
        self.header_text_stack.append(char)

    def backspace(self):
        if self.header_text_stack:
            self.header_text_stack.pop()
    
    def __str__(self):
        return ''.join(self.header_text_stack + list(reversed(self.rear_text_stack)))

if __name__ == '__main__':
    editor = Editor(sys.stdin.readline().strip())
    M = int(sys.stdin.readline())

    for i in range(M):
        command = sys.stdin.readline().strip()
        if len(command.split()) == 2:
            editor.insert(command.split()[1])
        else:
            if command == 'L':
                editor.cursur_move('LEFT')
            elif command == 'D':
                editor.cursur_move('RIGHT')
            elif command == 'B':
                editor.backspace()
    print(editor)