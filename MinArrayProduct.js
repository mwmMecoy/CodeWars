// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always has even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
// minSum({12,6,10,26,3,24}) ==> return (342)
// Explanation:
// The minimum sum obtained from summing each two integers product , 26*3 + 24*6 + 12*10 = 342
// minSum({9,2,8,7,5,4,0,6}) ==> return (74)

//Sort the array, then multiply the numbers starting from each end of the sorted array (1st item multiple by last, etc.)

function minSum(arr) {
    // your code here
    arr = arr.sort((a,b) => a-b)
    let product = 0;
    for(let i = 0; i < arr.length/2; i++) {
        product += arr[i]*arr[arr.length-i-1]
    }
    return product
}


console.log(minSum([5,4,2,3]), 22);
console.log(minSum([12,6,10,26,3,24]), 342);
console.log(minSum([9,2,8,7,5,4,0,6]), 74);