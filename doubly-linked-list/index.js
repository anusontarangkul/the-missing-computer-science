class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode;
        }
        this.length++;
        return this

    }
    pop() {
        if (!this.head) {
            return undefined;
        }
        let currentTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;

        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        currentTail.prev = null;

        this.length--;
        return currentTail
    }
    shift() {
        if (!this.head) {
            return undefined;
        }
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null
        } else {
            this.head = oldHead.next;
            this.head.prev = null
        }
        oldHead.next = null;
        this.length--;
        return oldHead
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++;
        return this
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return null
        }
        if (index <= this.length / 2) {
            let current = this.head
            for (let i = 0; i < index; i++) {
                current = current.next
            }
            return current;
        } else {
            let current = this.tail;
            for (let i = this.length; i > index; i--) {
                current = current.prev
            }
            return current
        }
    }
    set(index, val) {
        let replacedNode = this.get(index)
        if (!replacedNode) {
            return false
        }
        replacedNode.val = val
        return true
    }
    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false
        }
        if (index === 0) {
            this.unshift(val)
            return true
        }
        if (index === this.length) {
            this.push(val)
            return true
        }
        let prevNode = this.get(index - 1)
        let newNode = new Node(val)
        let temp = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = temp;
        temp.prev = newNode;
        this.length++;
        return true
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index === 0) {
            return this.shift()
        }
        if (index === this.length - 1) {
            return this.pop()
        }
        let removedNode = this.get(index)
        let prevNode = this.get(index - 1)
        let nextNode = this.get(index + 1)
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode
    }
}
let sample = new DoublyLinkedList()
sample.push(1)
sample.push(2)
console.log(sample.remove(0))

