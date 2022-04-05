class Stack {
    constructor() {
        this.data = []
    }
    peek() {
        return this.data[this.data.length - 1]
    }
    pop() {
        return this.data.pop()
    }
    push(val) {
        return this.data.push(val)
    }
}
const myStack = new Stack()
myStack.push('2')
myStack.push('3')
// console.log(myStack.pop())
console.log(myStack)