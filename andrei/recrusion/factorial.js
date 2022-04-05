let counter = 1
function findFactorialRecursive(number) {

    // base case (stop)
    if (number === 2) {
        return 2
    }
    // recursive case
    return findFactorialRecursive(number - 1) * number
}

function findFactorialIterative(number) {
    let factorial = 1;
    if (number <= 2) {
        return number
    }
    for (let i = 2; i <= number; i++) {
        factorial *= i
    }
    return factorial
}

console.log(findFactorialRecursive(3))
// 5! = 5 * 4 * 3 * 2 * 1