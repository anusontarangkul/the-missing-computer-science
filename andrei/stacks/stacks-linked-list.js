class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top
    }
    push(value) {
        const newNode = new Node(value)

        if (this.length === 0) {
            this.bottom = newNode;
            this.top = newNode
        } else {
            const prevTop = this.top;
            this.top = newNode;
            newNode.next = prevTop
        }
        this.length++
        return this
    }
    pop() {
        if (!this.top) {
            return null
        }
        if (this.top === this.bottom) {
            this.bottom = null
        }
        let removed = this.top
        let newHead = this.top.next
        this.top = newHead
        this.length--
        return removed
    }
}

const myStack = new Stack()
myStack.push('2')
myStack.push('3')
console.log(myStack.pop())
console.log(myStack)
