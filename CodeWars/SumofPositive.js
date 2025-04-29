// Task
// You get an array of numbers, return the sum of all of the positives ones.

// Example
// [1, -4, 7, 12] => 
// 1
// +
// 7
// +
// 12
// =
// 20
// 1+7+12=20
// Note
// If there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    var sum = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i] > 0){
            sum += arr[i]
        }    
    }
    return sum
}

// we love a 1 liner

// function positiveSum(arr) {
//     return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
//  }