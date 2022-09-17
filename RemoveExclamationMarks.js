// Description:
// Remove all exclamation marks from the end of sentence.

//parameter is a single string
//return the string with all exclamation marks at the end removed

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

//split the string into an array, while the last element is an exclamation mark, remove it

function remove (string) {  
    let arr = string.split('')
    while(arr[arr.length-1]=='!'){
        arr.pop()
    }
    return arr.join('')
  }