
# URL   : https://www.acmicpc.net/problem/1920
# STATE : DONE(2020-01-24)

class Node:
    def __init__(self, data):
        self.data = data
        self.right = None
        self.left = None

    def __str__(self):
        return str(self.data)

class SearchTree:
    def __init__(self):
        self.root = None

    def insertElement(self, data):
        new_node = Node(data)
        if self.root == None:
            self.root = new_node
        
        node = self.root
        while True:
            pre_node = node
            if node.data > new_node.data:
                node = node.left
                if node == None:
                    node = new_node
                    pre_node.left = node
            elif node.data < new_node.data:
                node = node.right
                if node == None:
                    node = new_node
                    pre_node.right = node
            else: return

    def searchElement(self, data):
        node = self.root
        while True:
            if node.data > data:
                if node.left:
                    node = node.left
                else:
                    return False
            elif node.data < data:
                if node.right:
                    node = node.right
                else:
                    return False
            elif node.data == data:
                return True

if __name__ == '__main__':
    N = int(input())
    A = list(map(int, input().split()))

    m_tree = SearchTree()
    for element in A:
        m_tree.insertElement(element)

    M = int(input())
    B = list(map(int, input().split()))

    for element in B:
        if m_tree.searchElement(element):
            print(str(1))
        else:
            print(str(0))

    """ TIMEOUT
    for element in B:
        if element in A:
            print(str(1))
        else:
            print(str(0))
    """