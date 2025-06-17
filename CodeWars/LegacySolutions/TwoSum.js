// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

//P - an array of integers and a target value. There is no need to check for invalid input. There will always be a valid combination to reach the target
//R - the indices of the 2 numbers that will sum to the target
//E - twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
//P - nested for loop, one holding a value and the 2nd cycling through the rest of the array to check for the sum

//note: This solution seems very computation heavy. Could have trouble if the 1st parameter is an enormous array

function twoSum(numbers, target) {
    // ...
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i+1; j < numbers.length; j++){
            if(numbers[i] + numbers[j] == target){
                return [i , j]
            }
        }
    }
}
