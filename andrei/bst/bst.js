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
    // remove(val){
    //     if(!this.root){
    //         return false;
    //     }
    //     let currentNode = this.root;
    //     let parentNode = null;

    //     while(currentNode){
    //         if(val < currentNode.val){
    //             parentNode = currentNode;
    //             currentNode = currentNode.left
    //         } else if (val > currentNode.val){
    //             parentNode = currentNode
    //             currentNode = currentNode.right
    //         } else if (currentNode.val === val){
    //             if(currentNode.right === null){
    //                 if(parentNode === null){
    //                     this.root = currentNode.left
    //                 } else {
    //                     if(currentNode.val < parentNode.val){
    //                         parentNode.left = currentNode.left
    //                     } else if (currentNode.val > parentNode.val){
    //                         parentNode.right = currentNode.left
    //                     }
    //                 }
    //             } else if(currentNode.right.left === null){
    //                 if(parentNode === null){
    //                     this.root = currentNode.left
    //                 } else {
    //                     currentNode.right.left = currentNode.left
    //                     if(cur)
    //                 }
    //             }
    //         }
    //     }
    // }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree.lookup(20))
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