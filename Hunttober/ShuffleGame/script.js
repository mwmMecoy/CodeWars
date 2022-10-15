
const gameGrid = [["https://i.imgur.com/zhpfEVe.png","https://i.imgur.com/u10nOUw.png","https://i.imgur.com/sEQOcGq.png"],["https://i.imgur.com/ggUqmPE.png","https://i.imgur.com/0GB90f6.png","https://i.imgur.com/nN4kAp6.png"],["https://i.imgur.com/cj9s8XS.png","https://i.imgur.com/G1kBgAO.png","https://i.imgur.com/BOkhyd6.png"]]

const blankSpace = [0,gameGrid[0].length-1]

const blankUrl = 'https://i.imgur.com/IGnmVTp.png'

const gridWithBlank = gameGrid.map((subArray, ind) => {
      if (ind === blankSpace[0]) {
        const sub = subArray.map(x => x)

        return sub.map((val, i) => {
          if (i === blankSpace[1]) {
            return blankUrl
          }
          return val
        })
      }
      return subArray.map(x => x)
    })


const Winner = (props) => {
  return (
    <h2>You won! It took you {props.moves} moves!</h2>
  )
}


const GameBoard = (props) => {
    return(
        <section id='gameBoard'>
            {props.grid.map((arr, arrInd) => {
                return (
                    arr.map((val, valInd) => {
                        return (
                            <div className='gameSquare' onClick={() => {
                              return props.onMove(arrInd,valInd)
                            }}>
                              <img src={val} alt={`Tile ${valInd+1}`} id={val} />
                            </div>
                        )
                    })
                )
            })}
        </section>
    )
}

const Game = () => {
    const [grid, setGrid] = React.useState([...gridWithBlank].map(x => [...x]))
    const [isWin, setIsWin] = React.useState(false)
    const [moveCount, setMoveCount] = React.useState(0)
    
    const blankSubArr = grid.findIndex(x => x.includes(blankUrl))
    const blankIndex = grid[blankSubArr].indexOf(blankUrl)
    
    // insert Day1 function 'checkWin' here
    // instead of return true or return false, use setIsWin(true) or setIsWin(false)
    function checkWin(arr1, arr2){
        if(arr1.length != arr2.length){
            return setIsWin(false)
        }
        for(let i = 0; i < arr1.length; i++) {
            if(Array.isArray(arr1[i])){
                if(!day1Array(arr1[i], arr2[i])){
                    return setIsWin(false);
                }
            }
            else if(arr1[i] != arr2[i]){
                return setIsWin(false);
            }
        }
        return setIsWin(true);
    }
    

    // insert Day2 move left function 'moveBlankLeft(curGrid, blankChar)' here
    // just before return, add this 'checkWin(gridWithBlank, curGrid)'
    // should return mutated array that was passed in (curGrid)
    function moveBlankLeft(curGrid, blankChar){
        if(curGrid[0] == blankChar){
            return curGrid
        }
        let index = curGrid.indexOf(blankChar)
        let temp = curGrid[index-1]
        curGrid[index] = temp
        curGrid[index-1] = blankChar
        checkWin(gridWithBlank, curGrid)
        return curGrid;
    }

    
    // insert Day2 move right function 'moveBlankRight(curGrid, blankChar)' here
    // just before return, add this 'checkWin(gridWithBlank, curGrid)'
    // should return mutated array that was passed in (curGrid)
    function moveBlankRight(curGrid, blankChar){
        if(arr[curGrid.length-1] == blankChar){
            return arr
        }
        let index = curGrid.indexOf(blankChar)
        let temp = curGrid[index+1]
        curGrid[index] = temp
        curGrid[index+1] = blankChar
        checkWin(gridWithBlank, curGrid)
        return curGrid;
    }
    

    // insert Day4 move up function 'moveBlankUp(curGrid, blankGrid) here'
    // just before return, add this 'checkWin(gridWithBlank, curGrid)'
    // should return mutated array that was passed in (curGrid)
    function moveBlankUp(curGrid, blankGrid){
        //find the value in the array
        let location = []
        for(let i = 0; i < blankGrid.length; i++){
            for(let j = 0; j < blankGrid[i].length; j++){
                if(blankGrid[i][j] === curGrid){
                    location = [i, j]
                }
            }
        }
    
        //check to see if the value is already at the top of the grid
        if(location[0] == 0){
            checkWin(gridWithBlank, curGrid)
            return blankGrid
        }
    
        // move value up 1 space in the grid, replace it's original spot with the value that was in that place previously
        let temp = blankGrid[location[0]-1][location[1]]
        blankGrid[location[0]-1][location[1]] = curGrid
        blankGrid[location[0]][location[1]] = temp
        checkWin(gridWithBlank, curGrid)
        return blankGrid 
    }
    
    // insert Day4 move down function 'moveBlankDown(curGrid, blankGrid) here'
    // just before return, add this 'checkWin(gridWithBlank, curGrid)'
    // should return mutated array that was passed in (curGrid)
    function moveBlankDown(curGrid, curGrid){
        //find the value in the array
        let location = []
        for(let i = 0; i < curGrid.length; i++){
            for(let j = 0; j < curGrid[i].length; j++){
                if(curGrid[i][j] === curGrid){
                    location = [i, j]
                }
            }
        }
    
        //check to see if the value is already at the top of the grid
        if(location[0] == curGrid.length-1){
            checkWin(gridWithBlank, curGrid)
            return curGrid
        }
    
        // move value up 1 space in the grid, replace it's original spot with the value that was in that place previously
        let temp = curGrid[location[0]+1][location[1]]
        curGrid[location[0]+1][location[1]] = curGrid
        curGrid[location[0]][location[1]] = temp
        checkWin(gridWithBlank, curGrid)
        return curGrid 
    }
    
    // My found and modified Day5 shuffle function
    // Uses Durstenfeld shuffle algorithm
    const shuffleGrid = () => {
      setIsWin(false)
      const tempFlatGrid = ([...grid].map(x => [...x])).flat()
      
      for (let i = tempFlatGrid.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = tempFlatGrid[i];
          tempFlatGrid[i] = tempFlatGrid[j];
          tempFlatGrid[j] = temp;
       }
      
      const tempGrid = []
      while (tempFlatGrid.length) {
        tempGrid.push(tempFlatGrid.splice(0,3))
      }

      setGrid(tempGrid)
    }
    
    const resetGame = () => {
      setGrid([...gridWithBlank].map(x => [...x]))
      setIsWin(false)
      setMoveCount(0)
    }
    
    const handleMove = (arrInd, valInd) => {
      const newGrid = [...grid].map(x => [...x])

      if (arrInd === blankSubArr) {
        const gridDimension = newGrid.length
        if (valInd - blankIndex === 1) {
          // move right
          console.log("move right")
          const modifiedArr = []
          for (let i=0; i<newGrid.length; i++) {
            if (i === blankSubArr) {
              modifiedArr.push(moveBlankRight(newGrid[i], blankUrl))
            } else {
              modifiedArr.push(newGrid[i])
            }
          }

          checkWin(gridWithBlank, modifiedArr)
          setGrid([...modifiedArr].map(x=>x))
          setMoveCount(moveCount + 1)
        } else if (valInd - blankIndex === -1  && blankIndex % gridDimension) {
          // move left
          console.log("move left")
          const modifiedArr = []
          for (let i=0; i<newGrid.length; i++) {
            if (i === blankSubArr) {
              modifiedArr.push(moveBlankLeft(newGrid[i], blankUrl))
            } else {
              modifiedArr.push(newGrid[i])
            }
          }

          checkWin(gridWithBlank, modifiedArr)
          setGrid([...modifiedArr].map(x=>x))
          setMoveCount(moveCount + 1)
        }
      } else if (arrInd !== blankSubArr && valInd === blankIndex) {
        if (arrInd - blankSubArr === 1) {
          // move down
          console.log("move down")
          setGrid([...moveBlankDown(newGrid, blankUrl)].map(x=>x))
          setMoveCount(moveCount + 1)
        } else if (arrInd - blankSubArr === -1) {
          // move up
          console.log("move up")
          setGrid([...moveBlankUp(newGrid, blankUrl)].map(x=>x))
          setMoveCount(moveCount + 1)
        }
      }
    }
    
    return (
          <div>
            <button onClick={() => shuffleGrid()}>Shuffle</button>
            <button onClick={() => resetGame()}>New Game</button>
            {isWin ?
              <Winner moves={moveCount} /> :
              <GameBoard onMove={(arrInd, valInd) => handleMove(arrInd, valInd)} grid={grid} />
            }
          </div>
    )
}

ReactDOM.render(<Game />, document.getElementById("root"))

// 