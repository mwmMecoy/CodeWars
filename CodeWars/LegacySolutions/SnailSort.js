// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

snail = function(array) {
    // Go through the array in the requested order and remove the elements as we go
    //If empty array return empty.
    if(array.length == 0) return []
    
    let snail = [];
    //While there are still elements left in the arrays
    while(array.length > 0) {

      //First line pushed to array
      snail.push(...array.shift())

      //Loop through end of all arrays
      for(let i = 0; i <array.length; i++ ) {
        snail.push(array[i].pop())
      }

      //Loops through the remainder of the last array and populate it in reverse order
      snail.push(...(array.pop() || []).reverse())
      
      //Back through the first element in each array starting from the last array
      for(let i = array.length-1; i >=0; i--) {
        snail.push(array[i].shift())
      }
    }
    return snail;
  }

//   Alternate with do/while

//   snail = function(arr) {
//     var result = [];
//     var top = 0, bottom = arr.length-1;
//     var left = 0, right = arr[0].length-1;
    
//     do {
//       for (var i = left; i <= right; i++){result.push(arr[top][i])} // top row
//       for (var i = top+1; i <= bottom; i++){result.push(arr[i][right])} // right column
//       for (var i = right-1; i >= left; i--){result.push(arr[bottom][i])} // bottom row
//       for (var i = bottom-1; i > top; i--){result.push(arr[i][left])} // left column
//       top++; bottom--; left++; right--;
//     } while (top <= bottom);
    
//     return result;
//   }



console.log(snail([[]]), []);
console.log(snail([[1]]), [1]);
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
