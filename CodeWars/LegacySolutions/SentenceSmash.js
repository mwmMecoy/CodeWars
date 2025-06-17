// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

//PREP
//This is just a knowledge test of the .join('') function, but we will hard code it
function smash (words) {
    if(words.length ==0) return ''
    let str = '';
    for(let i = 0; i < words.length-1; i++) {
        str+= words[i] + ' '
    }
    str+= words.pop()
    return str;
};