// [0,1,0,2,1,0,3,1,0,1,2] 8
// [] 0
// [3] 0
//[3,4,3] 0

function findWater(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        let maxL = 0;
        let maxR = 0;
        for (let r = i; r < arr.length; r++) {
            if (arr[r] > maxR) {
                maxR = arr[r]
            }
        }
        for (let l = i; l >= 0; l--) {
            if (arr[l] > maxL) {
                maxL = arr[l]
            }
        }
        const currentWater = Math.min(maxL, maxR) - arr[i]
        if (currentWater > 0) {
            total += currentWater
        }

    }
    return total
}

console.log(findWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]))

function findWater2Pointer(arr) {
    let waterHeight = 0;
    let pL = 0;
    let pR = arr.length - 1;
    let maxL = 0
    let maxR = 0
    while (pL < pR) {
        let leftHeight = arr[pL]
        let rightHeight = arr[pR]
        if (leftHeight < rightHeight) {
            if (leftHeight > maxL) {
                maxL = leftHeight
            } else {
                waterHeight = waterHeight += maxL - leftHeight
            }
            pL++
        } else {
            if (rightHeight > maxR) {
                maxR = rightHeight
            } else {
                waterHeight = waterHeight += maxR - rightHeight
            }
            pR--;
        }
    }
    return waterHeight
}