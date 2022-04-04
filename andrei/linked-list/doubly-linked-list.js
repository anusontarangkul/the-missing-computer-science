class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(val) {
        let newNode = new Node(val)
        this.head = newNode;
        this.tail = newNode;
        this.length = 1
    }
    append(val) {
        let newNode = new Node(val)
        this.tail.next = newNode

        newNode.prev = this.tail;
        this.tail = newNode
        this.length++
        return this
    }
    prepend(val) {
        let newNode = new Node(val)

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++
    }
    insert(index, val) {
        let newNode = new Node(val)
        if (index >= this.length) {
            return this.append(val)
        }
        let nodeBeforeInsert = this.traverseToIndex(index - 1)
        let nodeAfterInsert = nodeBeforeInsert.next
        nodeBeforeInsert.next = newNode
        newNode.prev = nodeBeforeInsert;
        newNode.next = nodeAfterInsert;
        nodeAfterInsert.prev = newNode;
        this.length++
        return this

    }
    traverseToIndex(index) {
        let currentNode;
        if (index <= this.length / 2) {
            currentNode = this.head
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
            return currentNode
        } else {
            currentNode = this.tail
            for (let i = this.length - 1; i > index; i++) {
                currentNode = currentNode.prev
            }
            return currentNode
        }
    }
    remove(index) {
        if (index >= this.length) {
            return undefined
        }
        let nodeBeforeRemove = this.traverseToIndex(index - 1)
        let removedNode = nodeBeforeRemove.next;
        let nodeAfterRemove = removedNode.next
        nodeBeforeRemove.next = nodeAfterRemove
        nodeAfterRemove.prev = nodeBeforeRemove
        removedNode.next = null;
        removedNode.prev = null;
        this.length--
        return removedNode

    }
    print() {
        let array = []
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.val)
            currentNode = currentNode.next
        }

        return array
    }
}

let test = new DoublyLinkedList('a')
test.prepend('b')
test.prepend('c')
test.prepend('d')
// test.insert(3, 'x')
// test.remove(2)
console.log(test)