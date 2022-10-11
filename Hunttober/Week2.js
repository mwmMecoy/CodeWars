// write a function that will check equality between 2 arrays with a particular structure.

// The arrays will:

// Be of equal size
// Will each contain some number (X) arrays
// Each inner array will contain that same number (X) primitive elements
// All the nested primitives within each array must strictly match to return a true result. Any mismatches will return false.

// For example:

function day1Array(arr1, arr2){
    if(arr1.length != arr2.length){
        return false
    }
    for(let i = 0; i < arr1.length; i++) {
        if(Array.isArray(arr1[i])){
            if(!day1Array(arr1[i], arr2[i])){
                return false;
            }
        }
        else if(arr1[i] != arr2[i]){
            return false;
        }
    }
    return true;
}

// each of these arrays have 3 nested arrays of 3 strings each 
const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']]
const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']]

// if we were to use our function to compare all the possible pairs
// ONLY arr1 vs arr2 would return true

console.log(day1Array(arr1, arr2)) // true
console.log(day1Array(arr1, arr3)) // false
console.log(day1Array(arr1, arr4)) // false

// I need twin functions, a function that swaps a given primitive value in a given 1-dimensional array to an index to the left, and another that swaps it to the right.

// Some things to note:

// If the given value is on the edge of the array and can't move in that direction, don't move it.
// The array passed in should be mutated by this function. Scandalous, I know.

function moveLeft(arr, e){
    if(arr[0] == e){
        return arr
    }
    let index = arr.indexOf(e)
    let temp = arr[index-1]
    arr[index] = temp
    arr[index-1] = e
    return arr;
}

function moveRight(arr, e){
    if(arr[arr.length-1] == e){
        return arr
    }
    let index = arr.indexOf(e)
    let temp = arr[index+1]
    arr[index] = temp
    arr[index+1] = e
    return arr;
}

myArray = ['abc', 'xyz', 1, 2, 'Hey!']

// call move left function with 'xyz' and myArray as arguments
moveLeft(myArray, 'xyz')
console.log(myArray)   // ['xyz', 'abc', 1, 2, 'Hey!']

// call move left function again, same arguments
// Note that 'xyz' is already as far left as it can go
moveLeft(myArray, 'xyz')
console.log(myArray) // ['xyz', 'abc', 1, 2, 'Hey!'] no change

// call move right function this time, with 2 and myArray as arguments
moveRight(myArray, 2)
console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2]

// call move right function again, same arguments
// Note that 2 is already as far right as it can go
moveRight(myArray, 2)
console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2] no change


// write a function that:

// takes in a given array of strings and move any entries containing the letter 'a' to the front
// then move any remaining entries that have over 3 characters to the back
// please preserve the relative order of entries within their given category

// myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']
// // move things around
// => ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']

function moveThingsAround(arr){
    let letterA = arr.filter((x) => x.includes('a'))
    let threeLong = arr.filter(x => (!letterA.includes(x) && x.length > 3))
    let remainders = arr.filter(x => (!letterA.includes(x) && !threeLong.includes(x)))

    return letterA.concat(remainders).concat(threeLong)
}

let myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']

console.log(moveThingsAround(myArr))

