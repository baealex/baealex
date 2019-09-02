import time

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

    def __str__(self):
        return str(self.data)

class DualLinkedList:
    def __init__(self, data):
        new_node = Node(data)
        self.head = new_node
        self.list_size = 1

    def __str__(self):
        print_list = '[ '
        node = self.head
        while True:
            print_list += str(node)
            if node.next == self.head:
                break
            node = node.next
            print_list += ', '
        print_list += ' ]'
        return print_list

    def insertFirst(self, data):
        new_node = Node(data)
        if not self.head.prev == None:
            new_node.prev = self.head.prev
            self.head.prev.next = new_node
        if not self.head.next == None:
            new_node.next = self.head.next
        self.head.prev = new_node
        self.head = new_node

    def insertMiddleAfter(self, num, data):
        node = self.selectNode(num)
        new_node = Node(data)
        new_node.prev = node
        new_node.next = node.next
        node.next.prev = new_node
        node.next = new_node
        self.list_size += 1

    def insertMiddleBefore(self, num, data):
        node = self.selectNode(num)
        new_node = Node(data)
        new_node.prev = node.prev
        new_node.next = node
        node.prev.next = new_node
        node.prev = new_node
        self.list_size += 1
    
    def insertLast(self, data):
        new_node = Node(data)
        if self.head.next == None:
            self.head.next = new_node
            new_node.prev = self.head

        if not self.head.prev == None:
            self.head.prev.next = new_node
            new_node.prev = self.head.prev
        self.head.prev = new_node
        new_node.next = self.head
        self.list_size += 1

    def selectNode(self, num):
        if self.list_size < 1:
            return # Underflow
        elif self.list_size <= num:
            return # Overflow
        count = 0
        node = self.head
        if int(self.list_size/2) > num:
            while count < num:
                node = node.next
                count += 1
        else:
            repeat = self.list_size - num
            while count < repeat:
                node = node.prev
                count += 1
        return node

    def deleteNode(self, num):
        if self.list_size < 1:
            return # Underflow
        elif self.list_size <= num:
            return # Overflow
        
        if num == 0:
            self.deleteHead()
            return
        node = self.selectNode(num)
        node.prev.next = node.next
        node.next.prev = node.prev
        del node

    def deleteHead(self):
        node = self.head
        node.prev.next = node.next
        node.next.prev = node.prev
        self.head = node.next
        del node

    def size(self):
        return str(self.list_size)

if __name__ == "__main__":
    current_time = time.time()
    print('=============== DUAL LINKED LIST ===============')
    m_list = DualLinkedList(1)
    m_list.insertLast(5)
    m_list.insertLast(6)
    print('LinkedList :', m_list)
    print('LinkedList Size() :', m_list.size())
    print('LinkedList SelectNode(0) :', m_list.selectNode(0))
    print('LinkedList SelectNode(2) :', m_list.selectNode(2))

    m_list.insertMiddleBefore(1, 15)
    print('LinkedList Insert Middle Before(1, 15) :', m_list)
    m_list.insertMiddleAfter(1, 17)
    print('LinkedList Insert Middle After(1, 17) :', m_list)
    
    m_list.insertFirst(100)
    print('LinkedList Insert First(100) : ', m_list)
    print('LinkedList SelectNode(4) :', m_list.selectNode(4))

    m_list.deleteNode(0)
    print('LinkedList Delete Node(0) : ', m_list)
    m_list.deleteNode(1)
    print('LinkedList Delete Node(1) : ', m_list)
    print('실행시간 : ' + str(time.time() - current_time))