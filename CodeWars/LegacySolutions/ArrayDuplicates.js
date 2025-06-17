// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

function dup(s) {
    //..
      
    let solution = []
        for(let j = 0; j < s.length; j++){
        let arr = s[j].split('')
        let noDupes = [];
        for(let i = 0; i < arr.length; i++){
            if(arr[i] != arr[i+1]) noDupes.push(arr[i])
        }
        solution.push(noDupes.join(''))
    }
    return solution
};