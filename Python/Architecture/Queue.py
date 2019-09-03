class Node:
    def __init__(self, data):
        self.data = data
        self.link = None
    
    def __str__(self):
        return str(self.data)

class Queue:
    def __init__(self, data):
        new_node = Node(data)
        self.front = new_node
        self.rear = new_node
        self.front.link = self.rear

    def __str__(self):
        print_queue = '<= [ '
        node = self.front
        while True:
            print_queue += str(node)
            if(node == self.rear):
                break
            try:
                node = node.link
            except:
                break
            print_queue += ', '
        print_queue += ' ] <='
        return print_queue

    def isEmpty(self):
        if self.front == self.rear:
            return True
        else:
            return False

    def enQueue(self, data):
        new_node = Node(data)
        if self.rear == None:
            self.rear = new_node
            self.front.link = self.rear
            return
        if self.front == None:
            self.front = Node(data)
            self.front.link = self.rear
            return
        self.rear.link = new_node
        self.rear = new_node

    def deQueue(self):
        if not self.isEmpty():
            node = self.front
            value = node.data
            self.front = self.front.link
            del node
            return value

    def peek(self):
        return self.front.data
        

if __name__=="__main__":
    m_queue = Queue(5)
    print(m_queue)
    m_queue.enQueue(7)
    print(m_queue)
    m_queue.enQueue(9)
    print(m_queue)
    print('deQueue :', m_queue.deQueue())
    print('deQueue :', m_queue.deQueue())
    print('deQueue :', m_queue.deQueue())
    print('   peek :', m_queue.peek())
    for i in range(10):
        m_queue.enQueue(i)
    print(m_queue)
    print('deQueue :', m_queue.deQueue())
