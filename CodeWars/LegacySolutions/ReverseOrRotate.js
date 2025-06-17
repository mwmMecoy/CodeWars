// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

//PREP
//P: Can the string contain characters that are not numbers? Can the size number be anything besides a whole number?
//R: Returned value needs to be in string form
//E: 
// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> "" 
// revrot("563000655734469485", 4) --> "0365065073456944"
//P: get a substring using the size integer provided, then break that string into an array and use a reduce to get the sum of those numbers and check to see if they are devisible by 2. 
//If divisble by 2 join, reverse, then add back to the original string. If not then put the first character at the end

function revrot(str, sz) {
    // your code
    console.log(str, sz)
    if(str.length ==0 || sz < 1 || sz > str.length) {
        return ""
    }
    let arrayStr = str.split('')
    let checkStr = arrayStr.slice(0, sz)
    console.log(arrayStr, checkStr)
    let sum = checkStr.reduce((acc, c) => acc + Math.pow(c, 3))
    if(sum % 2 == 0) {
        let temp = checkStr[0]
        checkStr.shift()
        checkStr.push(temp)
        return checkStr.join('') + arrayStr.slice(sz).join('')
    }
    
}