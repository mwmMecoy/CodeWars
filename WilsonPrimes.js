// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then ((P-1)! + 1) / (P * P) should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.

function amIWilson(p) {
    // check if prime is Wilson
    //factorial first
    var fact = p-1, counter = p-1;
    if (counter === 0 || counter === 1) 
      fact = 1; 
    while (counter > 1) { 
        counter--;
        fact *= counter;
    }
    
    let check = (fact+1) / (p*p)
    return Number.isInteger(check)
  }

console.log(amIWilson(5), true)
console.log(amIWilson(9), false)
console.log(amIWilson(6), false)