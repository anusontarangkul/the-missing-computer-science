class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = null
    }
    push(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            let current = this.first;
            this.first = newNode;
            newNode.next = current
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.first) {
            return null
        }
        let removedNode = this.first
        if (this.length === 1) {
            this.first = null;
            this.last = null
        } else {
            this.first = removedNode.first
            removedNode.next = null;
        }

        this.length--;
        return removedNode
    }
}