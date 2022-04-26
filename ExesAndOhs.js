// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    //code here
    let lowstr = str.toLowerCase();
    let arr = lowstr.split("");
     //count the x's
    var exes = arr.reduce((n, val) => {
        return n + (val === 'x');
      }, 0);
      
    // count the o's
    var ohes = arr.reduce((n, val) => {
        return n + (val === 'o');
      }, 0);
  
    return (exes==ohes);
}

console.log(XO('xo'),true);
console.log(XO("xxOo"),true);
console.log(XO("xxxm"),false);
console.log(XO("Oo"),false);
console.log(XO("ooom"),false);