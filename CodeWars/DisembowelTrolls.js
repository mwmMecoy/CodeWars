// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


//Solution plan: Split the string into an array of characters, filter out the vowels, and join the remaining characters back into a string.
// The vowels are 'a', 'e', 'i', 'o', and 'u' in both uppercase and lowercase.
function disemvowel(str) {
    return str.split('').filter(x => !'aeiouAEIOU'.includes(x)).join('');
}

//Here we are with a regex solution
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}
//The regex solution uses the replace method to remove all vowels from the string. The 'g' flag is used to replace all occurrences, and the 'i' flag makes it case-insensitive.

//Some test cases to validate both solutions
console.log(disemvowel("This website is for losers LOL!")); // "Ths wbst s fr lsrs LL!"
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read")); // "N fns bt,\nYr wrtng s mng th wrst 'v vr rd"