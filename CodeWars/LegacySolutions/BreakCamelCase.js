// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    let arr = [];
    for(let i = 0; i < string.length; i++) {
      if(string[i].toUpperCase()==string[i]) {
        arr.push(` ${string[i]}`)
      }
      else {
        arr.push(`${string[i]}`)
      }
    }
  return arr.join('')
}


console.log(solution('camelCasing'), 'camel Casing', 'Unexpected result')
console.log(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')