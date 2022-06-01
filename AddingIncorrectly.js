// For this kata you will have to forget how to add two numbers.

// It can be best explained using the following meme:

// Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

//PREP
//P: 2 integers, always positive, always whole numbers
//R: The incorrect sum of these numbers, add them but don't carry the numbers
//E: 16+18=214, 122+81=1103
//P: split the numbers into strings, and then reverse them. This reversal will be to avoid issue with larger numbers being longer arrays. Find the larger number and use that number's length as the cap for the loop. going through the numbers, add them togeth and push the sum to a new array. Add an option for add 0 if it reaches the end of a shorter number array first. Finally, reverse the 'wrongSum' and join it back together, return as int.

function add(num1, num2) {
    num1 = ('' + num1).split('').reverse()
    num2 = ('' + num2).split('').reverse()
    let max = Math.max(num1.length, num2.length)
    let wrongSum = [];
    for(let i = 0; i < max; i++){
        wrongSum.push((parseInt(num1[i]) || 0) + (parseInt(num2[i]) || 0))
    }
    return parseInt(wrongSum.reverse().join(''));
}

console.log(add(2, 11), 13);
console.log(add(0, 1), 1);
console.log(add(0, 0), 0);
console.log(add(16, 18), 214);
console.log(add(26, 39), 515);
console.log(add(122, 81), 1103);
console.log(add(1222, 30277), 31499);
console.log(add(1236, 30977), 31111013);
console.log(add(38810, 1383), 391193);
console.log(add(49999, 49999), 818181818);