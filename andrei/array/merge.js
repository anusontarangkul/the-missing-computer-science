function mergeSortedArrays(arr1, arr2) {
    console.log('arr1', arr1)
    console.log('arr2', arr2)
    let arr1Counter = 0
    let arr2Counter = 0
    let arr1Pointer = arr1[arr1Counter]
    let arr2Pointer = arr2[arr2Counter]
    const mergedArr = []

    while (arr1Counter < arr1.length && arr2Counter < arr2.length) {
        console.log('arr1Pointer', arr1Pointer)
        console.log('arr2Pointer', arr2Pointer)
        if (arr1Pointer <= arr2Pointer) {
            console.log(arr1Pointer + "beingi pushed")
            mergedArr.push(arr1Pointer)
            arr1Counter++
            console.log('new arr1counter', arr1Counter)
            arr1Pointer = arr1[arr1Counter]
            console.log('new arr1Pointer', arr1Pointer)
            if (!arr1Pointer) {
                for (let i = arr2Counter; i < arr2.length; i++) {
                    mergedArr.push(arr2[i])
                }
                console.log('special')
            }
        } else if (arr1Pointer > arr2Pointer) {
            console.log(arr2Pointer + "beingi pushed")
            mergedArr.push(arr2Pointer)
            arr2Counter++
            console.log('new arr2counter', arr2Counter)
            arr2Pointer = arr2[arr2Counter]

            if (!arr2Pointer) {
                for (let i = arr1Counter; i < arr1.length; i++) {
                    mergedArr.push(arr1[i])
                }
                console.log('special')
            }
        }
        else if (!arr2Pointer) {
            console.log('special')
            console.log(arr1Pointer + "beingi pushed")
            mergedArr.push(arr1Pointer)
            arr1Counter++
            console.log('new arr1counter', arr1Counter)
            arr1Pointer = arr1[arr1Counter]
            console.log('new arr1Pointer', arr1Pointer)
        }
        //  else if (!arr1Pointer && arr2Pointer) {
        //     console.log(arr2Pointer + "beingi pushed")
        //     mergedArr.push(arr2Pointer)
        //     arr2Counter++
        //     console.log('new arr2counter', arr2Counter)
        //     arr2Pointer = arr2[arr2Counter]
        //     console.log('new arr2Pointer', arr2Pointer)
        // }
    }
    return mergedArr

}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]))