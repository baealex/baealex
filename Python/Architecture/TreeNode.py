class TreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
        
    def __str__(self):
        return str(self.data)

def PreOrder(node):
    if not node == None:
        print(node, end = ' ')
        PreOrder(node.left)
        PreOrder(node.right)
        
def InOrder(node):
    if not node == None:
        Inorder(node.left)
        print(node, end = ' ')
        Inorder(node.right)

def PostOrder(node):
    if not node == None:
        PostOrder(node.left)
        PostOrder(node.right)
        print(node, end = ' ')

if __name__ == "__main__":
    tree_root = TreeNode('-')
    tree_root.left = TreeNode('*')
    tree_root.right = TreeNode('/')
    
    node = tree_root.left
    node.left = TreeNode('A')
    node.right = TreeNode('B')
    node = tree_root.right
    node.left = TreeNode('C')
    node.right = TreeNode('D')

    print(       '전위 순회 : ', end='') ; PreOrder(tree_root)
    print('\n' + '중위 순회 : ', end='') ; InOrder(tree_root)
    print('\n' + '후위 순회 : ', end='') ; PostOrder(tree_root)