// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    return str.toLowerCase().split("").filter((letter) => letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u").length
  }

//Better one-liner
// function getCount(str) {
//  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
// }

console.log(getCount("abracadabra"))