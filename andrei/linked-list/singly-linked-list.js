class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(val) {
        let newNode = new Node(val)
        this.head = newNode;
        this.tail = newNode
        this.length = 1;
    }
    prepend(val) {
        let newNode = new Node(val)
        newNode.next = this.head
        this.head = newNode
        this.length++;
        return this
    }
    append(val) {
        let newNode = new Node(val)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }
    insert(index, val) {
        if (index >= this.length) {
            return this.append(val)
        }
        let newNode = new Node(val)
        let nodeBeforeInsert = this.traverse(index - 1)
        let nodeAfterInsert = nodeBeforeInsert.next
        nodeBeforeInsert.next = newNode
        newNode.next = nodeAfterInsert;
        this.length++
        return this
    }
    traverse(index) {

        let current = this.head;
        for (let i = 0; i < index; i++) {
            console.log(current.val)
            current = current.next
        }
        return current
    }
    printList() {
        const array = []
        let currentNode = this.head
        while (currentNode !== null) {
            array.push(currentNode.val)
            currentNode = currentNode.next
        }
        return array
    }
    remove(index) {
        let nodeBeforeRemove = this.traverse(index - 1)
        let removedNode = nodeBeforeRemove.next
        let nodeAfterRemove = removedNode.next
        nodeBeforeRemove.next = nodeAfterRemove
        this.length--;
        removedNode.next = null;
        return removedNode;
    }
    reverse() {
        if (!this.head.next) {
            return this.head
        }
        let first = this.head
        this.tail = this.head
        let second = first.next;
        while (second) {
            console.log('initial first', first)
            console.log('initial 2nd', second)
            const temp = second.next;
            console.log('temp', temp)
            second.next = first;
            console.log('second.next is now', second.next)
            first = second
            console.log('first is now', first)
            second = temp
            console.log('second is now', temp)
        }
        this.head.next = null;
        this.head = first
        return this
    }

}

let test = new SinglyLinkedList(0)
test.append(1)
test.append(2)
test.append(3)
test.insert(99, 'a')
test.remove(1)
console.log(test.printList())
console.log(test.reverse())
console.log(test.printList())
// console.log(test)