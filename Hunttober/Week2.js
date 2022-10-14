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

// Imagine, if you will, an array with length X, with each of its entries having X number of primitives as their entries. Now imagine it arranged as a grid.

// // for the less imaginative among us :) 
// [[0,1,2],[3,4,5],[6,7,8]]

// // as a grid
// [
// [0,1,2],
// [3,4,5],
// [6,7,8]
// ]

// Still with me? I hope so! Today I need your help moving some things around again. I'm always rearranging.

// Please write twin functions that each take in a given value that will only appear once within a given array of a similar structure to the one described above, which will either move that value up one row or down one row in the array, keeping its same horizontal position. It will essentially swap places with whatever was where it needed to be. Just like in Day 2, don't do anything if the given value is already as high or low as it can get.

// Oh, and go ahead and mutate the given array. We're livin' on the wild side!

// make 2 functions, one that will move a value up 1 array in a 2d array, and one that moves it down 1 array
// takes a value that is going to be found and moved, and the 2d array in which it needs to be moved

function moveUp(value, arr){
    //find the value in the array
    let location = []
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] === value){
                location = [i, j]
            }
        }
    }

    //check to see if the value is already at the top of the grid
    if(location[0] == 0){
        return arr
    }

    // move value up 1 space in the grid, replace it's original spot with the value that was in that place previously
    let temp = arr[location[0]-1][location[1]]
    arr[location[0]-1][location[1]] = value
    arr[location[0]][location[1]] = temp
    return arr 
}

function moveDown(value, arr){
    //find the value in the array
    let location = []
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] === value){
                location = [i, j]
            }
        }
    }

    //check to see if the value is already at the top of the grid
    if(location[0] == arr.length-1){
        return arr
    }

    // move value up 1 space in the grid, replace it's original spot with the value that was in that place previously
    let temp = arr[location[0]+1][location[1]]
    arr[location[0]+1][location[1]] = value
    arr[location[0]][location[1]] = temp
    return arr 
}


myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
console.log(myGrid)

// call move up function with 'h' and myGrid
moveUp('h', myGrid)
console.log(myGrid) // [['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']]

// call move up function again, same arguments
moveUp('h', myGrid)
console.log(myGrid) // [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// call move up function again, same arguments
// Note that 'h' is already as far up as it can go
moveUp('h', myGrid)
console.log(myGrid) // [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// call move down function this time, with 'f' and myGrid as arguments
moveDown('f', myGrid)
console.log(myGrid) // [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

// call move down function again, same arguments
// Note that 'f' is already as far down as it can go
moveDown('f', myGrid)
console.log(myGrid) // [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

// Please create a function that will take in an array like we've been working with all week (X-inner arrays of X-primitive values each) and shuffle it up in place. The inner primitive values can move to any of the inner arrays, but the length of those inner arrays must always remain X. Other than that, shuffle away! Do your best to have a thorough, random shuffle in a single call of your function.

function DIYShuffle(arr){
    for(let i = 0; i < arr.length; i++){
        for(let k = 0; k < arr.length; k++){
            let shuffle = Math.floor(Math.random()*4)
            switch(shuffle){
                case 0:
                    moveLeft(arr[i], arr[i][k]) 
                    break;
                case 1:
                    amoveRight(arr[i], arr[i][k]) 
                    break;
                case 2:
                    moveDown(arr[i][k], arr) 
                    break;
                case 3:
                    moveLeft(arr[i], arr[i][k]) 
                    break;
            }
        }
    }
    return arr
}

ShuffleArray = [[1,2,3],[4,5,6],[7,8,9]]
console.log(DIYShuffle(ShuffleArray))