

function reverse(str) {
    console.log('str', str)
    const backwards = []
    let length = str.length - 1
    for (let i = length; i >= 0; i--) {
        console.log(str[i])
        backwards.push(str[i])
    }
    console.log('backwards', backwards)
    const reversedStr = backwards.join('')
    return reversedStr
}

console.log(reverse('cake'))