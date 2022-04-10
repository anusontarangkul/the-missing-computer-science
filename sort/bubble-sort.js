function bubbleSortNaive(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}

console.log(bubbleSortNaive([37, 45, 28, 8]))

function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}
console.log(bubbleSort([37, 45, 28, 8]))

function bubbleSortOpt(arr) {
    var noSwaps = false
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true
        for (let j = 0; j < i - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
                noSwaps = false
            }
        }
        if (noSwaps) {
            break
        }
    }
    return arr
}

console.log(bubbleSortOpt([37, 45, 28, 8]))