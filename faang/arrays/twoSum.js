// [1,3,7,9,2] t=11 [3,4]
// [1,3,7,9,2] t=25 null
// [] t=1 null
// [5] t=5 null
// [1,6] t=7 null

function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let outerPointer = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            let innerPointer = arr[j]
            if (target - outerPointer === innerPointer) {
                return [i, j]
            }
        }
    }
    return null
}


// Time Complexity O(n^2)
// Space Complexity O(1)

// Outer loop
// Inner Loop
// Condition if target minus outer equals inner,
//      Return the two pointers as array if true

function twoSumMap(arr, target) {
    let targetMap = {}
    for (let i = 0; i < arr.length; i++) {
        let match = target - arr[i]
        if (targetMap[match] >= 0) {
            return [targetMap[match], i]
        }
        targetMap[arr[i]] = i;
        console.log(targetMap)
    }
    return null
}

// outer loop
// find match number
// check if match number is in obj, if not add it, if it is return that index and current index

console.log(twoSum([1, 3, 7, 9, 2], 11))
console.log(twoSumMap([1, 3, 7, 9, 2], 11))