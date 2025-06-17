// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

//PREP
//P: array will always be divisible by 8, only contains 0s and 1s
//R: The bytes in reverse order that they appear in the array, joined back together
//E:
// const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
// const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
//P: 

function dataReverse(data) {
    // Your code here
    let finished = []
    for(let i = 0; i <= data.length; i+=8) {
        finished.push(data.slice(i, i+8))
    }
    return [].concat(...finished.reverse())
}

  const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
  const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
  console.log(dataReverse(data1),data2)
  const data3 = [0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]
  const data4 = [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]
  console.log(dataReverse(data3),data4)