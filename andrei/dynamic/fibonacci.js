function fibonacci(n) {
    if (n < 2) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

function fibonacciMaster() {
    let cache = {}
    return function fib(n) {
        if (n in cache) {
            return cache[n]
        }
        if (n < 2) {
            return n
        } else {
            cache[n] = fib(n - 1) + fib(n - 2)
            return cache[n]
        }
    }
}

function fibonacciMaster2(n) {
    let answer = [0, 1]
    for (let i = 2; i <= n; i++) {
        answer.push(anser[i - 2] + anser[i - 1])
    }
    return answer.pop()
}

const fasterFib = fibonacciMaster()
console.log(fasterFib(10))