// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

//P: an array of increasing letters, they could be uppercase or lower case
//R: the 'missing' letter in the series.
//E
//["a","b","c","d","f"] -> "e"
//["O","Q","R","S"] -> "P"
//P: join the array and turn it into a word, cycle through the charcode for each letter in the word and check the next one. if they aren't correctly adjacent return the missing letter

function findMissingLetter(array){
    let letters = array.join('')
    for(let i = 0; i < letters.length-1; i++){
        if(letters.charCodeAt(i)+1 != letters.charCodeAt(i+1)){
            return String.fromCharCode(letters.charCodeAt(i)+1)
        }
    }
}