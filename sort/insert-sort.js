function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentChar = arr[i]
        for (var j = i - 1; j >= 0 && arr[j] > currentChar; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal
    }
    return arr
}

console.log(insertionSort([2, 1, 4]))