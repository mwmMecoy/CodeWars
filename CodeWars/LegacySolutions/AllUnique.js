// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

//PREP
//P: a string, may contain any ASCII chacracters
//R: boolean, checking whether there are any repeated characters 
//E: 
console.log(hasUniqueChars("  nAa"),false) // because there are two spaces ' '
console.log(hasUniqueChars("abcdef"),true)
console.log(hasUniqueChars("aA"),true) // case - sensitivity
console.log(hasUniqueChars("++-"),false) // because there are two '+'
//P: Filter out all duplicates using Set after turning the string into an array, then check if this joined array is the same as the provided string

function hasUniqueChars(str){
    // ...
    let unique = [].concat(...new Set(str.split(''))).join('')
    return unique == str
}