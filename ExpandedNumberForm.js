// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    // Your code here
    let arr = String(num).split('').reverse()
    let str = ''
    for(let i = arr.length-1; i > 0; i--){
      if(arr[i] !== '0'){
        str += `${arr[i]}${'0'.repeat(i)} + `
        console.log(str)
      }
    }
    str += arr[0]
    return str
  }