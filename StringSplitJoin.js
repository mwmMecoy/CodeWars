// Task
// Implement a function which accepts 2 arguments: string and separator.

// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

//PREP
//P: 2 parameters, a string and a symbol. Will I always get a symbol? Will the string ever be empty?
//R: the string with the letters now separated by the given symbol. Only add these between the letters, not between the words (adjacent to spaces)
//E:
console.log(splitAndMerge("My name is John"," ") , "M y n a m e i s J o h n");
console.log(splitAndMerge("My name is John","-") , "M-y n-a-m-e i-s J-o-h-n");
console.log(splitAndMerge("Hello World!",".") , "H.e.l.l.o W.o.r.l.d.!");
console.log(splitAndMerge("Hello World!",",") , "H,e,l,l,o W,o,r,l,d,!");
//P: split the string into an array of the words. Loop through this array and split each word into its letter, then join back together with the separator symbol between each letter. Finally join the words back together with a space and return.

function splitAndMerge(string, separator) {
    string = string.split(' ')
    for(let i = 0; i < string.length; i++) {
      string[i] = string[i].split('').join(separator)
    }
    return string.join(' ')
  }