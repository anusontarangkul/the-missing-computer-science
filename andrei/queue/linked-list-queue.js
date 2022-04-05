class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first
    }
    enqueue(val) {
        const newNode = new Node(val)

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode
        } else {
            this.last.next = newNode;
            this.last = newNode
        }
        this.length++;
        return this;
    }
    dequeue() {
        if (!this.first) {
            return undefined
        }
        if (this.first === this.last) {
            this.last = null
        }
        let removed = this.first;
        this.first = removed.next
        this.length--;
        return removed;
    }
}

const test = new Queue()
test.enqueue(1)
test.enqueue(2)
test.enqueue(3)
console.log(test)
test.dequeue()
console.log(test)
