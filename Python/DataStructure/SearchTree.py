import random

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
                node = node.left
            elif node.data < data:
                node = node.right
            elif node.data == data:
                break
            else:
                return Node('탐색 결과 없음')
        
        return node

    def preorderTraversal(self, node):
        print(node, end=' ')
        if not node.left  == None : self.preorderTraversal(node.left)
        if not node.right == None : self.preorderTraversal(node.right)

    def inorderTraversal(self, node):
        if not node.left  == None : self.inorderTraversal(node.left)
        print(node, end=' ')
        if not node.right == None : self.inorderTraversal(node.right)
    
    def postorderTraversal(self, node):
        if not node.left  == None : self.postorderTraversal(node.left)
        if not node.right == None : self.postorderTraversal(node.right)
        print(node, end=' ')

if __name__ == "__main__":
    m_tree = SearchTree()

    m_tree.insertElement(250)
    for i in range(20):
        m_tree.insertElement(random.randint(0,500))
    
    print(       '전위 순회 : ', end='') ; m_tree.preorderTraversal(m_tree.root)
    print('\n' + '중위 순회 : ', end='') ; m_tree.inorderTraversal(m_tree.root)
    print('\n' + '후위 순회 : ', end='') ; m_tree.postorderTraversal(m_tree.root)

    node = m_tree.searchElement(250)
    print('\n' + '탐색한 노드의 값 :', node)
    print(       '노드의 왼쪽 서브 트리 :', node.left)
    print(       '노드의 오른쪽 서브 트리 :', node.right)

    node = m_tree.searchElement(node.left.data)
    print('\n' + '탐색한 노드의 값 :', node)
    print(       '노드의 왼쪽 서브 트리 :', node.left)
    print(       '노드의 오른쪽 서브 트리 :', node.right)