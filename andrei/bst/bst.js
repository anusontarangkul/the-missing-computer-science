class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(val) {
        let newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
            return this
        }
        let currentNode = this.root;
        while (true) {
            if (newNode.val < currentNode.val) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this
                }
                currentNode = currentNode.left

            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this
                }
                currentNode = currentNode.right

            }
        }

    }
    lookup(val) {
        if (!this.root) {
            return false
        }
        let currentNode = this.root
        while (currentNode) {
            if (currentNode.val === val) {
                return currentNode
            }
            else if (val < currentNode) {
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        }
        return false
    }
    breadthFirstSearch() {
        let currentNode = this.root;
        let list = []
        let queue = []
        queue.push(currentNode)
        while (queue.length > 0) {
            currentNode = queue.shift()
            list.push(currentNode.val)
            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }
        return list
    }
    bfsRecursive(queue, list) {
        if (!queue.length) {
            return list
        }
        let currentNode = queue.shift()
        list.push(currentNode.val)
        if (currentNode.left) {
            queue.push(currentNode.left)
        }
        if (currentNode.right) {
            queue.push(currentNode.right)
        }
        return this.bfsRecursive(queue, list)
    }
    DFSInorder() {
        return traverseInOrder(this.root, [])
    }
    DFSPostorder() {
        return traversePostOrder(this.root, [])
    }
    DFSPreorder() {
        return traversePreOrder(this.root, [])
    }
}

function traverseInOrder(node, list) {
    if (node.left) {
        traverseInOrder(node.left, list)
    }
    list.push(node.val)
    if (node.right) {
        traverseInOrder(node.right, list)
    }
    return list
}

function traversePostOrder(node, list) {
    if (node.left) {
        traversePostOrder(node.left, list)
    }
    if (node.right) {
        traversePostOrder(node.right, list)
    }
    list.push(node.val)
    return list
}

function traversePreOrder(node, list) {
    list.push(node.val)
    if (node.left) {
        traversePreOrder(node.left, list)
    }
    if (node.right) {
        traversePreOrder(node.right, list)
    }
    return list
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree.DFSInorder())
console.log(tree.DFSPostorder())
console.log(tree.DFSPreorder())
// console.log(JSON.stringify(traverse(tree.root)))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}