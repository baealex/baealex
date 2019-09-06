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
        self.inorder_list = []

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
    
    def inorderTraversal(self, node):
        if not node.left  == None : self.inorderTraversal(node.left)
        self.inorder_list.append(node.data)
        if not node.right == None : self.inorderTraversal(node.right)

def treeSort(m_list):
    length = len(m_list)
    m_search_tree = SearchTree()
    for element in m_list:
        m_search_tree.insertElement(element)
    m_search_tree.inorderTraversal(m_search_tree.root)
    return m_search_tree.inorder_list

if __name__=="__main__":
    m_list = [3, 100, 40, 49, 65, 16, 43, 34, 77, 54]
    print('원본 리스트 :', m_list)
    sort_list = treeSort(m_list)
    print('정렬 리스트 :', sort_list)