// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


// Pretty simple one-liner. split turns it into an array of characters,
// reverse reverses the array, and join turns it back into a string.
function solution(str){
  return str.split('').reverse().join('');  
}