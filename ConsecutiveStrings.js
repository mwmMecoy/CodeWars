// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

//PREP
//Being given an array of strings and an integer. No need to check for invalid input and integer will always be a whole number. If the integer is less than 1 or greater than the length of the given array, return an empty string
//return the longest string consisting of k consecutive strings in the array
//  Going to create an array with the the strings sorted by length and get the longest 'k' of them
// check index of each and place them in order 

function longestConsec(strarr, k) {
    // your code
    if(k< 1 || k > strarr.length) return ''

    let longestStr = '', currentStr=''

    for (let i = 0; i < strarr.length; i++){
        currentStr = strarr.slice(i, i+k);
        console.log(currentStr)
        if (currentStr.join('').length > longestStr.length ){
            longestStr = currentStr.join('');
        }
    }
      
    return longestStr
}