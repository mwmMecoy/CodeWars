// 9. Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return (x>=0 && (x.toString() == x.toString().split('').reverse().join('')))
};

//test cases to validate the solution
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false


//Follow up: Could you solve it without converting the integer to a string?
var isPalindrome = function(x) {
    if (x < 0) return false; // Negative numbers are not palindromes
    if (x === 0) return true; // 0 is a palindrome

    let reversed = 0;
    let original = x;

    while (x > 0) {
        const digit = x % 10; // Get the last digit
        reversed = reversed * 10 + digit; // Build the reversed number
        x = Math.floor(x / 10); // Remove the last digit from x
    }

    return original === reversed; // Check if the original number is equal to the reversed number
 }