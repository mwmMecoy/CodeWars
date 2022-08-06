// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

//P: a positive integer that will determine the size of the arrays
//R: a 2d array of the multiplcation table 
//E:
//P: cycle through 'size' number of times, multiplying the number by the current iteration and adding it to the array 'size' number of times

multiplicationTable = function(size) {
    // insert code here
    let table = []
    for(let i = 1; i <= size; i++){
        let tempArr = []
        for(let j = 1; j <= size; j++){
            tempArr.push(j*i)
        }
        table.push(tempArr)
    }
    return table;
  }
  