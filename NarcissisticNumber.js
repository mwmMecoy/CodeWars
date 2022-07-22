// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

//P: getting a single base 10 number. It will be a positive non-zero number, no need to check for text or other invalid inputs.
//R: boolean, stating whether or not the number given is narcissistic
//E:For example, take 153 (3 digits), which is narcisstic:
// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
//P: convert the number into a string, iterate through the string and set each number to the power of the length of the string then add to a sum variable. Test to see if sum is equal to the given number
function narcissistic(value) {
    // Code me to return true or false
    let strValue = String(value)
    let sum = 0
    for(let i = 0 ; i < strValue.length; i++){
        sum += parseInt(strValue[i])**strValue.length
    }
    return sum == value
}
  
