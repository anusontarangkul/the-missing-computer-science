function findAreaOfWater(arr) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const width = j - i;
            const height = Math.min(arr[i], arr[j])
            const area = width * height;
            if (area > maxSum) {
                maxSum = area;
            }
        }
    }
    return maxSum
}

console.log(findAreaOfWater([6, 9, 3, 4, 5, 8]))

// Time Compelexity O(n^2)
// Space Complexity O(1)
// Create max variable
// Outer loop
// Inner Loop
// Find weidth by minusing the inner loop index by outer loop
// Find height by getting min of the values of 2 index
// Calculate area
// Take max of calculated area with inner area
// Return max

// [7,1,2,3,9] (height =7 * width =4) = 28
// [] = 0
// [7] = 0
// [6,9,3,4,5,8]

function findAreaOfWaterPointer(arr) {
    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    let maxArea = findArea(leftPointer, rightPointer, arr);
    while (leftPointer !== rightPointer) {
        console.log('left', leftPointer)
        console.log('right', rightPointer)
        if (arr[leftPointer] < arr[rightPointer]) {
            leftPointer++
        } else {
            rightPointer--
        }
        const newArea = findArea(leftPointer, rightPointer, arr)
        console.log('new area', newArea)
        maxArea = Math.max(newArea, maxArea)
    }
    return maxArea
}

function findArea(leftPointer, rightPointer, arr) {
    const area = (rightPointer - leftPointer) * Math.min(arr[leftPointer], arr[rightPointer])
    return area
}

console.log(findAreaOfWaterPointer([6, 9, 3, 4, 5, 8]))

// Create left pointer
// Create right pointer
// Find current max
// Check the min from the pointer
// Move the pointer closer to other pointer from the min
// Check the new max
// Do it while the pointers don't overlap