class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let nodeVal = new Node(val);
        if (!this.head) {
            this.head = nodeVal;
            this.tail = this.head;
        } else {
            this.tail.next = nodeVal
            this.tail = nodeVal
        }
        this.length++;
        return this
    }
    traverse() {
        var current = this.head;
        while (current) {
            console.log('current', current.val)
            current = current.next
        }
    }
    pop() {
        if (!this.head) {
            return undefined
        }
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;

        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current
    }
    shift() {
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        this.head = current.next;
        this.length--
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current
    }
    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    getIndex(index) {
        if (index < 0 || index > this.length) {
            return null
        }
        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current
    }
    setAtIndex(val, index) {
        let currentNodeAtIndex = this.getIndex(index)
        if (!currentNodeAtIndex) {
            return false
        }
        currentNodeAtIndex.val = val;
        return true
    }
    insert(val, index) {
        if (index < 0 || index > this.length) {
            return false
        }
        if (index === this.length) {
            this.push(val)
            return true
        }
        if (index === 0) {
            this.unshift(val)
            return true
        }
        let newNode = new Node(val)
        let prevNode = this.getIndex(index - 1)
        console.log(prevNode)
        let temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp;
        this.length++
        return true
    }
    remove(index) {
        if (index < 0 || index > this.length) {
            return undefined
        }
        if (index === this.length - 1) {
            return this.pop()
        }
        if (index === 0) {
            return this.shift()
        }
        let removedNode = this.getIndex(index)
        let prevNode = this.getIndex(index - 1);
        prevNode.next = removedNode.next
        this.length--;
        return removedNode
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        console.log(this)
        return this
    }
}

var first = new SinglyLinkedList()
first.push('hello')
first.push('hello2')
first.push('hello3')

first.reverse()
first.traverse()