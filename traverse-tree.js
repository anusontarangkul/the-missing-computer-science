class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null
    }
    insert(val) {
        let newNode = new Node(val)
        if (this.root === null) {
            this.root = newNode
            return this
        }
        let current = this.root
        while (true) {
            if (val === current.val) {
                return undefined
            }
            if (val < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this
                }
                current = current.left
            } else if (val > current.val) {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right

            }
        }
    }
    bfs() {
        let arrayVals = []
        if (!this.root) {
            return arrayVals
        }
        let current = this.root;
        let queue = [current]
        while (queue.length > 0) {
            let toAdd = queue.pop()
            arrayVals.push(toAdd.val)
            if (toAdd.left) {
                queue.unshift(toAdd.left)
            }
            if (toAdd.right) {
                queue.unshift(toAdd.right)
            }
        }
        return arrayVals
    }
    dfs_pre() {

        let arrayVals = [];
        if (!this.root) {
            return arrayVals
        }
        let current = this.root
        function helper(node) {
            arrayVals.push(node.val)
            if (node.left) {
                helper(node.left)
            }
            if (node.right) {
                helper(node.right)
            }
        }
        helper(current)
        return arrayVals
    }
    dfs_post() {
        let arrayVals = [];
        if (!this.root) {
            return arrayVals;
        }
        let current = this.root;
        function traverse(node) {
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
            arrayVals.push(node.val)
        }
        traverse(current)
        return arrayVals
    }
    dfs_in() {
        let arrayVals = [];
        if (!this.root) {
            return arrayVals;
        }
        let current = this.root;
        function traverse(node) {
            if (node.left) {
                traverse(node.left)
            }
            arrayVals.push(node.val)
            if (node.right) {
                traverse(node.right)
            }

        }
        traverse(current)
        return arrayVals
    }
}

let tree = new BST;
tree.insert(2)
tree.insert(4)
tree.insert(6)
console.log(tree.dfs_in())