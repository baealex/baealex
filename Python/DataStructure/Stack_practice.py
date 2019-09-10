class Node:
    def __init__(self, data):
        self.data = data
        self.prev = None
    
    def __str__(self):
        return str(self.data)

class Stack:
    def __init__(self):
        self.head = None
        self.top = 0

    def __str__(self):
        print_stack = '<= [ '
        node = self.head
        while True:
            try:
                print_stack += str(node)
                if node.prev == None:
                    break
                node = node.prev
                print_stack += ', '
            except:
                break
        print_stack += ' ]'
        return print_stack

    def push(self, data):
        new_node = Node(data)
        if self.head == None:
            self.head = new_node
            return
        new_node.prev = self.head
        self.head = new_node
        self.top += 1

    def pop(self):
        node = self.head
        try:
            value = node.data ; del node
            self.top -= 1
            self.head = self.head.prev
        except:
            value = None
        return value

if __name__=="__main__":
    m_stack = Stack()

    calcul1 = '[(A+B)*(A+C)]/(B-C)'
    calcul2 = '[(A+B)*(A+C]/B-C)'
    is_pair = False
    for cal in calcul2:
        if cal == '(' or cal == '[':
            m_stack.push(cal)
            print(m_stack)
        if cal == ')':
            if m_stack.pop() == '(':
                is_pair = True
            else:
                is_pair = False
        if cal == ']':
            if m_stack.pop() == '[':
                is_pair = True
            else:
                is_pair = False

    if is_pair:
        print('calcul2 :',calcul2,'은 올바른 수식 입니다.')
    else:
        print('calcul2 :',calcul2,'은 잘못된 수식 입니다.')