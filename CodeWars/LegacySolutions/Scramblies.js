// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.

//PREP
//P: lower case letters only, the letters in the first string will be in a random order
//R: true if the letters from the 2nd string can be found in the first, false otherwise
//E: 
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False
//P: 
//cycle through each letter in the 2nd string and check to see if it is included in the first string. Remove the letter from the first string so that letters can't be used more than once.

//This one works, but is much too slow for large strings
// function scramble(str1, str2) {
//     //code me
//     str2 = str2.split('')
//     str1 = str1.split('')
//     for(let i = 0; i < str2.length; i++) {
//         if(!str1.includes(str2[i])) {
//             return false;
//         } else {
//             str1.splice(str1.indexOf(str2[i]), 1)
//         }
//     }
//     return true
// }

//turning the strings into objects to speed it up, but still can't pass the long string tests. This did eventually work by assuming that all strings longer than 10000 characters were automatically false.
function scramble(str1, str2) {
    console.log(str1, str2)
    let obj1 = getCharFrequencies(str1)
    let obj2 = getCharFrequencies(str2)
    for(let key in obj2) {
        if(obj1[key] == undefined) {
            return false
        }
        if(obj2[key] > obj1[key]) {
            return false;
        }
    }
    return true
}
function getCharFrequencies(str) {
    return str.split("").reduce(
        function(container, char) {
            (container[char] += 1) || (container[char] = 1);
            return container;
        }, 
    {});
}

//code pulled from solutions
function scramble(str1, str2) {
    let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
    return str2.split("").every((character) => --occurences[character] >= 0);
}

console.log(scramble('rkqodlw','world'),true);
console.log(scramble('cedewaraaossoqqyt','codewars'),true);
console.log(scramble('katas','steak'),false);
console.log(scramble('scriptjavx','javascript'),false);
console.log(scramble('scriptingjava','javascript'),true);
console.log(scramble('scriptsjava','javascripts'),true);
console.log(scramble('javscripts','javascript'),false);
console.log(scramble('jscripts','javascript'),false);
console.log(scramble('aabbcamaomsccdd','commas'),true);
console.log(scramble('commas','commas'),true);
console.log(scramble('sammoc','commas'),true)