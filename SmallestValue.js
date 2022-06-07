// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

//PREP
//P: an array of integers, all whole numbers, and a string that specifies how the result will be returned
//R: a number, either the smallest value or the index of the smallest value depending on what is requested
//E
console.log(min([1,2,3,4,5], 'value'), 1)
console.log(min([1,2,3,4,5], 'index'), 0)
//P: Get the smallest number, check for what return is requested and either just return that number or use index of to return the index

function min(arr, toReturn) {
    // TODO
    let tiny = Math.min(...arr)
    if(toReturn == 'value') {
      return tiny
    } else {
      return arr.indexOf(tiny)
    }
  }