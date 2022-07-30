// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//P: receiving 1 string, could contain special characters in addition to letters and number
//R: a boolean
//E: "The quick brown fox jumps over the lazy dog." - True
//P: convert string to lower case, break into an array and remove any duplicate characters, filter out any non-alpha characters and then check that the length = 26

function isPangram(string){
    //...
    if(!string) return false;
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    string = [].concat(...new Set(string.toLowerCase().split("")))
    string = string.filter(x => alpha.includes(x))
    return string.length === 26
  }