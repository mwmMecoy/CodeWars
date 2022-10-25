// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

//always going to be given a 2d array
//the inner arrays will contain only whole numbers

function solve(arr) {
    //map through the outer array and convert each inner array into a set
    arr = arr.map(x => [].concat(...new Set(x)))

    //reduce the outer array by multiplying the length of each inner set
    return arr.reduce((acc, c) => acc * c.length, 1)
}