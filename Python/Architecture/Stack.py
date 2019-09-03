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
        print_stack = '<=> [ '
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
    m_stack.push(5)
    m_stack.push(4)
    m_stack.push(3)
    print(m_stack)
    print('Stack pop :', m_stack.pop())
    print(m_stack)
    print('Stack pop :', m_stack.pop())
    print('Stack pop :', m_stack.pop())
    print(m_stack)