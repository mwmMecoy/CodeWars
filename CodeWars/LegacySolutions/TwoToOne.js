// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//p: 2 string that contain only letter. Could be uppercase or lower case?
//r: a string, sorted alphabetically, of all of the unique letters used in the 2 strings COMBINED
//e :
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
//p: 
//convert the strings into arrays, remove all duplicate letters using a set, and then sort them using the array sort mether

function longest(s1, s2) {
    // your code
    return [].concat(...new Set(s1.split('').concat(s2.split('')))).sort().join('')
  }