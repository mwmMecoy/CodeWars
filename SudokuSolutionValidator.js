// Sudoku Background
// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
// (More info at: http://en.wikipedia.org/wiki/Sudoku)

// Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

// Examples
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]); // => true
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2], 
//   [6, 7, 2, 1, 9, 0, 3, 4, 8],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]); // => false

//Using the Set object, check each row, column, and box in the board to verify they each contain only unique values. Also do continous checks at each value, if it is 0 the solution is invalid
function validSolution(board){
    //TODO
    //check for 0s
    for(let i = 0; i < board.length; i++){
        if(board[i].includes(0)) return false
    }

    //create the set that will be used to perfom checks
    let sudokuSet = new Set();

    //check each row
    for(let i = 0; i < 9; i++){
        //adding each num in the row to the set
        for(let j = 0; j < 9; j++){
            sudokuSet.add(board[i][j])
        }
        //Once a full row has been added, check for 9 unique characters and clear the set to move to the next row
        if(sudokuSet.size !== 9) return false
        sudokuSet.clear()
    }

    //check each column
    for(let i = 0; i < 9; i++){
        //adding each num in the column to the set
        for(let j = 0; j < 9; j++){
            sudokuSet.add(board[j][i])
        }
        //Once a full column has been added, check for 9 unique characters and clear the set to move to the next column
        if(sudokuSet.size !== 0) return false
        sudokuSet.clear()
    }

    //check each 3x3 square
    //loop for the row
    for(let i = 0; i < 9; i+=3){
        //loop for the column
        for(let j = 0; j < 9; j+=3){
            //next 2 loops are to cycle through the 3x3 section for the starting point of the row and column
            for(let k = 0; k < 3; k++){
                for(let l = 0; l < 3; l++){
                    sudokuSet.add(board[i+k][j+l])
                }
            }

            //check each square for 9 unique characters
            if(sudokuSet.size !== 9) return false
            sudokuSet.clear()
        }
    }

    //if all these tests are passed then it is a valid solution!
    return true
}