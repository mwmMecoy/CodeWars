// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
    // The function code should be here
    let s = string.split('')
    let hash = {}
    
    for(let i = 0; i < s.length; i++){
      if(hash[s[i]]){
        hash[s[i]]++
      }
      else{
        hash[s[i]] = 1;
      }
    }
    
     return hash;
  }