class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
        } else {
            let currentNode = this.root
            while (true) {
                if (newNode.value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right

                }
            }

        }
        return this
    }
    lookup(value) {
        if (!this.root) {
            return false
        }
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                currentNode = currentNode.right
            } else if (value === currentNode.value) {
                return currentNode
            }
        }
        return false
    }
}

function traverse(node) {
    const tree = { value: node.value }
    tree.left = node.left === null ? null : traverse(node.left)
    traverse(node.left)
    tree.right = node.right === null ? null : traverse(node.right)
    return tree
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(20)
tree.insert(2)
console.log(tree.lookup(202))
// console.log(JSON.stringify(traverse(tree.root)))
