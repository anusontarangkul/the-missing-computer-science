const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = Infinity;
        let minIndex
        for (let j = i; j < array.length; j++) {
            if (array[j] < min) {
                min = array[j]
                minIndex = j
            }
        }
        let temp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = temp
    }
    return array
}
// loop through arr
// create min variable
// nested loop
// compare for new min
// change index with min
// return arr

// O(n^2) time
// O(1) space (in place)

selectionSort(numbers);
console.log(numbers);