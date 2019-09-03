class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

    def __str__(self):
        return str(self.data)

class CircleLinkedList:
    def __init__(self, data):
        new_node = Node(data)
        self.head = new_node
        self.tail = None
        self.list_size = 1

    def __str__(self):
        print_list = '[ '
        node = self.head
        while True:
            print_list += str(node)
            if node == self.tail:
                break
            node = node.next
            print_list += ', '
        print_list += ' ]'
        return print_list

    def insertFirst(self, data):
        new_node = Node(data)
        if self.tail == None:
            self.tail = self.head
        temp_node = self.head
        self.head = new_node
        self.head.next = temp_node
        self.tail.next = new_node
        self.list_size += 1

    def insertMiddle(self, num, data):
        node = self.selectNode(num)
        new_node = Node(data)
        temp_next = node.next
        node.next = new_node
        new_node.next = temp_next
        self.list_size += 1
    
    def insertLast(self, data):
        new_node = Node(data)
        if self.tail == None:
            self.tail = new_node
            self.head.next = self.tail
        else:
            self.tail.next = new_node
            self.tail = new_node
        self.tail.next = self.head
        self.list_size += 1

    def selectNode(self, num):
        if self.list_size < num:
            print("Overflow")
            return
        node = self.head
        count = 0
        while count < num:
            node = node.next
            count += 1
        return node

    def deleteNode(self, num):
        if self.list_size < 1:
            return # Underflow
        elif self.list_size < num:
            return # Overflow

        if num == 0:
            self.deleteHead()
            return
        node = self.selectNode(num - 1)
        node.next = node.next.next
        del_node = node.next
        del del_node

    def deleteHead(self):
        node = self.head
        self.head = node.next
        del node

    def size(self):
        return str(self.list_size)

if __name__ == "__main__":
    print('=============== CIRCLE LINKED LIST ===============')
    m_list = CircleLinkedList(1)
    m_list.insertLast(5)
    m_list.insertLast(6)
    print('LinkedList :', m_list)
    print('LinkedList Size() :', m_list.size())
    print('LinkedList SelectNode(1) :', m_list.selectNode(1))

    m_list.insertMiddle(1, 15)
    print('LinkedList Insert Middle(1, 15) :', m_list)
    
    m_list.insertFirst(100)
    print('LinkedList Insert First(100) : ', m_list)
    print('LinkedList SelectNode(0) :', m_list.selectNode(0))

    m_list.deleteNode(0)
    print('LinkedList Delete Node(0) : ', m_list)
    m_list.deleteNode(1)
    print('LinkedList Delete Node(1) : ', m_list)