/**
 * Remember, board coloring starts with top left cell => WHITE
 * and then alternates with BLACK as in a usual chessboard.
 * @param {number[]} cols contains the N widths of the N columns of the chessboard
 * @param {number[]} rows contains the N heights of the N rows of the chessboard
 * @returns {number[]} a 2-element array, [totalWhiteArea, totalBlackArea]
 **/
 function whiteBlackAreas(cols, rows) {
    let area = [0,0]
    for(let i = 0; i < cols.length; i++) {
      for(let j = 0; j < rows.length; j++) {
        if(i%2==0 && j%2==0 || i%2==1 && j%2==1){
          area[0] += cols[i]*rows[j]
        } else {
          area[1] += cols[i]*rows[j]
        }
      }
    }
    console.log(area)
  
    
    return area
  }

function whiteBlackAreas(cols, rows) {
    let area = [0,0]

  let oddCols = cols.reduce((acc,c,i) => i%2==1? acc+c: acc, 0) 
  let evenCols = cols.reduce((acc,c,i) => i%2==0? acc+c: acc, 0) 
  let oddRows = rows.reduce((acc,c,i) => i%2==1? acc+c: acc, 0) 
  let evenRows = rows.reduce((acc,c,i) => i%2==0? acc+c: acc, 0) 

  area[0] += (oddCols*oddRows)+(evenCols*evenRows)
  area[1] += (oddCols*evenRows)+(evenCols*oddRows)
  
  return area
}