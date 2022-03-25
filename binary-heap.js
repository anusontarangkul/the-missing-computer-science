let array = []



function insert(val) {
    array.push(val)
    bubbleUp(array)
}

function bubbleUp(array) {
    let index = array.length;
    let parentIndex = Math.floor(index - 1) / 2;
    while (array[parentIndex] < array[index]) {
        let temp = array[parentIndex];
        array[parentIndex] = array[index]
        array[index] = temp;
        parentIndex = index
    }
    return array
}

class MaxBinaryHeap {
    constructor() {
        this.values = []
    }
    insert(element) {
        this.values.push(element)
        this.bubbleUp()
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx]
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx]
            if (element <= parent) {
                break
            }
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx
        }
    }
}