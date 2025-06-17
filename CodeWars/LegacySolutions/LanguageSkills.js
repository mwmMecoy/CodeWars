// Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

//PREP
//P: Will receive a list of key value pairs, the values and keys will never be dupolicated, and the values will always be an integer
//R: return the keys where the value is greater than 60, in the order of score
//E:
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
//P: Move the keys and values into an array, sort that array by the values, then return a final array that only contains the keys where the value was at least 60

function myLanguages(results) {
    let arr = []
    for(let key in results) {
        arr.push([key, results[key]])
    }

    //When sorting largest to smallest, b will come first
    arr.sort((a, b)=> b[1]-a[1])
    let final = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i][1]>=60) {
            final.push(arr[i][0])
        }
    }
    return final
}

console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}), ["Ruby", "Python"])
console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}), ["Dutch", "Greek", "Hindi"])
console.log(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}), [])
