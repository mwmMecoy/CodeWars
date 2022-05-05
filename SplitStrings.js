// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    let arr= []
    if(str.length%2==1) {
        for(let i = 0; i<str.length-1; i+=2) {
            arr.push(str.substring(i, i+1))
        }
        arr.push(`${str[str.length-1]}_`)
    } else {
        for(let i = 0; i<str.length; i+=2) {
            arr.push(str.substring(i, i+1))
        }
    }
    return arr
}

console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
console.log(solution(""), []);