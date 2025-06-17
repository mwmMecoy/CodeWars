// Coding in function bigToSmall. function accept 1 parameter arr(2D number array).

// Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.

// And then sort array in descending order.

// Finally, use the separator ">" to connect the elements into a string.

// Don't complain about the situation like 1>1 is not reasonable, it is just a separator.

//PREP
//P: two dimensional array. Always integers. no strings. Can be any whole number
//R: String of combined arrays joined with a '>' sign
//E bigToSmall([[1,2],[3,4],[5,6]]) should return "6>5>4>3>2>1"
//  bigToSmall([[1,3,5],[2,4,6]]) should return "6>5>4>3>2>1"
//  bigToSmall([[1,1],[1],[1,1]]) should return "1>1>1>1>1"
//P: flatten the array into a one D size, sort the array largest to smallest, then join it together using the required symbol

function bigToSmall(arr){
//coding here...
    arr = [].concat(...arr).sort((a,b) => b-a)
    return arr.join('>')

}

console.log(bigToSmall([[1,2],[3,4],[5,6]]) , "6>5>4>3>2>1");
console.log(bigToSmall([[1,3,5],[2,4,6]]) , "6>5>4>3>2>1");
console.log(bigToSmall([[1,1],[1],[1,1]]) , "1>1>1>1>1");