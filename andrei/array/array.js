const strings = ['a', 'b', 'c', 'd']
// 4*4 = 16 bytes of storage

// access
// O(1)
strings[2]

//push
// O(1)
strings.push('e')

// pop
// O(1)
strings.pop()

// unshift
// O(n)
strings.unshift('x')

// splice
// O(n)
strings.splice(2, 0, 'alient')

// console.log(strings)

// Create array

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }
    push(item) {
        this.data[this.length] = item
        this.length++
        return this.length
    }
    pop() {
        let removed = this.data[this.length - 1]
        delete this.data[this.length - 1];
        this.length--
        return removed
    }
    delete(index) {
        let removed = this.data[index]
        this.shiftItems(index)
        return removed
    }
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--;
    }
}

const newArray = new MyArray()
console.log('initial', newArray)
newArray.push('hi')
newArray.push('hi2')
console.log(newArray.delete(0))
console.log('newArray', newArray)