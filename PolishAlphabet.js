// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

//PREP
//P: a string, some characters may be polish. String might be empty, have no diacritics, and will check to see if the input is in fact a string
//R: a string, with polish characters replaced with english
//E: "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
//Pseudo: break down the string into individual characters in an array, cycle through the array and sway the diacritics for the correct character

// MY FIRST SOLUTION
// function correctPolishLetters (string) {
//     // your code
//     let str = string.split('');
//     for(let i = 0; i < str.length; i++) {
//         if(str[i]=='ą') str[i] = 'a'
//         else if(str[i]=='ć') str[i] = 'c'
//         else if(str[i]=='ę') str[i] = 'e'
//         else if(str[i]=='ł') str[i] = 'l'
//         else if(str[i]=='ń') str[i] = 'n'
//         else if(str[i]=='ó') str[i] = 'o'
//         else if(str[i]=='ś') str[i] = 's'
//         else if(str[i]=='ź') str[i] = 'z'
//         else if(str[i]=='ż') str[i] = 'z'
//     }
//     return str.join('');
// }


//Answer using an object as a reference instead of string of Ifs

let diacritics = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
};

function correctPolishLetters (string) {
  return string.split('').map((char) => diacritics[char] || char).join("");
}

console.log(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");