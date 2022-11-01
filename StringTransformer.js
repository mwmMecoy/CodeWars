// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

function stringTransformer(str) {
    // Your code here
    str = str
        .split('')
        .map(function(char){
            if(char.toLowerCase() == char.toUpperCase()) return char;
            if(char.toLowerCase() == char) return char.toUpperCase()
            if(char.toUpperCase() == char) return char.toLowerCase()
        })
        .join('')
    return str.split(' ').reverse().join(' ')
}