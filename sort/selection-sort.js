function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let lowest = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j
            }
        }
    }
    return arr
}

console.log(selectionSort([34, 22, 19, 10]))