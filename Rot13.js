// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
    //your code here
    const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let mesArr = message.split('');
    let rotArr = [];
    for(let i = 0; i < mesArr.length; i++) {
      if(alpha.includes(mesArr[i].toLowerCase())){
        if(mesArr[i]==mesArr[i].toLowerCase()){
          rotArr.push(alpha[(alpha.indexOf(mesArr[i].toLowerCase())+13)%26])
        } else{
          rotArr.push(alpha[(alpha.indexOf(mesArr[i].toLowerCase())+13)%26].toUpperCase())
        }
      } else{
        rotArr.push(mesArr[i])
      }
      console.log(rotArr)
    }
    return rotArr.join('')
  }