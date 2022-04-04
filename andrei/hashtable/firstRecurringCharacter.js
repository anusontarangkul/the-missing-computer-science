function findFirstRecurringChar(arr) {
    let charMap = {};

    for (let i = 0; i < arr.length; i++) {
        if (charMap[arr[i]] === undefined) {
            charMap[arr[i]] = true
        } else {
            return arr[i]
        }

    }
    return undefined
}
// create charObj
// Loop through arr
// Check if that value is in obj, if not add it, if is, return that value

console.log(findFirstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]))
console.log(findFirstRecurringChar([2, 1, 1, 2, 3, 5, 1, 2, 4]))
console.log(findFirstRecurringChar([2, 3, 4, 5]))