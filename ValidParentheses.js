// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.



//P: A string that contains only parentheses
//R: If the order of the parentheses is valid, if every closing parentheses has a matching opening one
//E: 
// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100
//P: Cycle through the string and count the number of open and close parentheses, if the closing if ever higher than the opening it is invalid

function validParentheses(parens) {
    // your code here ..
    let open = 0;
    let close = 0;
    for(let i = 0; i < parens.length; i++){
      if(parens[i]=='('){
        open++
      } else{
        close++
      }
      if(close>open){
        return false;
      }
    }
    return open==close
  }