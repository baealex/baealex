class Node:
    def __init__(self, data):
        self.data = data
        self.llink = None
        self.rlink = None

    def __str__(self):
        return str(self.data)

class Deque:
    def __init__(self):
        self.front = None
        self.rear = None

    def __str__(self):
        node = self.front
        print_deque = ' <=> [ '
        while True:
            print_deque += str(node)
            if node == self.rear:
                break
            try: node = node.rlink
            except: break
            print_deque += ', '
        print_deque += ' ] <=>'
        return print_deque

    def insertFront(self, data):
        new_node = Node(data)
        if self.front == None and self.rear == None:
            self.front = new_node
            self.front.rlink = self.rear
            self.rear = new_node
            self.rear.llink = self.front
        else:
            self.front.llink = new_node
            new_node.rlink = self.front
            self.front = new_node

    def insertRear(self, data):
        new_node = Node(data)
        if self.rear == None and self.front == None:
            self.rear = new_node
            self.rear.llink = self.front
            self.front = new_node
            self.front.rlink = self.rear
        else:
            self.rear.rlink = new_node
            new_node.llink = self.rear
            self.rear = new_node

    def deleteFront(self):
        if self.isEmpty():
            return
        node = self.front
        value = node.data
        self.front = self.front.rlink
        del node
        return value

    def deleteRear(self):
        if self.isEmpty():
            return
        node = self.rear
        value = node.data
        self.rear = self.rear.llink
        del node
        return value


    def peekFront(self):
        return self.front.data

    def peekRear(self):
        return self.front.data

    def isEmpty(self):
        if self.front == self.rear:
            return True
        else:
            return False

if __name__ == "__main__":
    m_deque = Deque()
    m_deque.insertFront(5)
    m_deque.insertFront(4)
    m_deque.insertFront(3)
    print(m_deque)
    m_deque.insertRear(10)
    m_deque.insertRear(9)
    m_deque.insertRear(10000)
    print(m_deque)
    print('Delete Front :', m_deque.deleteFront())
    for i in range(5):
        print('Delete Rear :', m_deque.deleteRear())
    print('Peek Rear   :', m_deque.peekRear())
    print(m_deque)