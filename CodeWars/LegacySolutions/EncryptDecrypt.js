function encrypt(text, n) {
    if(text == "" || text == null){
      return text
    } 
    
    let count = 0;
    let arr = text.split('')
    let evens = [], odds = []
    while(count < n) {
      for(let i = 0; i < arr.length; i++) {
        if(i%2==0) evens.push(arr[i])
        else odds.push(arr[i])
      }
      arr = (odds.join('')+evens.join('')).split('')
      odds = []
      evens = []
      count++
    }
    return arr.join('')
  
  }
  
  function decrypt(encryptedText, n) {
      if(encryptedText == "" || encryptedText == null){
      return encryptedText
    } 
    
    let count = 0;
    let arr = []
    let back = encryptedText.slice(Math.floor(encryptedText.length/2),encryptedText.length).split(''), 
        front = encryptedText.slice(0, Math.floor(encryptedText.length/2)).split('')
    
    while(count < n) {
      for(let i = 0; i < back.length; i++) {
        arr.push(back[i])
          if(i < front.length) arr.push(front[i])
      }
      encryptedText = arr.join('')
      back = encryptedText.slice(Math.floor(encryptedText.length/2),encryptedText.length).split('')
      front = encryptedText.slice(0, Math.floor(encryptedText.length/2)).split('')
      count++
      arr=[]
    }
    return encryptedText
  }
  
    
console.log(encrypt("This is a test!", 0), "This is a test!");
console.log(encrypt("This is a test!", 1), "hsi  etTi sats!");
console.log(encrypt("This is a test!", 2), "s eT ashi tist!");
console.log(encrypt("This is a test!", 3), " Tah itse sits!");
console.log(encrypt("This is a test!", 4), "This is a test!");
console.log(encrypt("This is a test!", -1), "This is a test!");
console.log(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");



console.log(decrypt("This is a test!", 0), "This is a test!");
console.log(decrypt("hsi  etTi sats!", 1), "This is a test!");
console.log(decrypt("s eT ashi tist!", 2), "This is a test!");
console.log(decrypt(" Tah itse sits!", 3), "This is a test!");
console.log(decrypt("This is a test!", 4), "This is a test!");
console.log(decrypt("This is a test!", -1), "This is a test!");
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!"); 
console.log(encrypt("", 0), "");
console.log(decrypt("", 0), "");
console.log(encrypt(null, 0), null);
console.log(decrypt(null, 0), null);
