// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

//P - 1 array of integers, positive or negative
//R - the contiguous subarray of those integers that sum to make the largest number
//E - 
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
//P - create variable for our temporary and calculated maximum. Check to see if the array is empty and return 0 if true.
// Cycle through the array and check to see if the current value is higher than the temporary max, if it is then the new temp max substring will start there
// the calculated max will then check to see if the temporary max is the largest so far, if so store it as the new calculated max

function maxSequence(arr){
    // ...
    let temporary = 0, max = 0

    if(arr.length == 0){
        return max
    }
    for(let i = 0; i < arr.length; i++){
        temporary = Math.max(arr[i], temporary + arr[i])
        max = Math.max(max, temporary)
    }
    return max
}