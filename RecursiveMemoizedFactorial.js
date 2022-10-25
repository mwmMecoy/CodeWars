// Task 1: Without peeking, write your own recursive factorial method

function factorial(num){
    if(num === 1){
        return num
    }
    return num * factorial(num-1)
}

// Task 2: Use your memo function from the previous exercise to memoize your factorial method

function memoizeFactorial(){
    const memo = {}
    return (n) => {
        if(n in memo){
            console.log("Fetching from Cache")
            return memo[n]
        } else {
            console.log("Calculating factorial")
            let result = factorial(n)
            memo[n] = result
            return result
        }
    }
}

const factorialTime = memoizeFactorial()

console.log(factorialTime(5))
console.log(factorialTime(5))
console.log(factorialTime(7))
console.log(factorialTime(8))
console.log(factorialTime(7))