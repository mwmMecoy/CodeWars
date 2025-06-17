// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

// Examples
// ("hello", "world", "l")       ==>  "held"
// ("coding", "anywhere", "n")   ==>  "codinywhere"
// ("jason", "samson", "s")      ==>  "jasamson"
// ("wonderful", "people", "e")  ==>  "wondeople"

//Plan: use indexOf to find the instance of the letter in each string, then use a substring to comnbine the 2

function stringMerge(string1, string2, letter){
    // Add code here :)
    let str1Location = string1.indexOf(letter);
    let str2Location = string2.indexOf(letter);
    return (string1.substring(0, str1Location) + string2.substring(str2Location, string2.length));
  }

  console.log(stringMerge("person","here", "e"), "pere");
  console.log(("apowiejfoiajsf","iwahfeijouh", "j"), "apowiejouh");
  console.log(stringMerge("incredible","people", "e"), "increople");