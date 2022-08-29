// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

//P- a string of words, all words will be in lowercase, no need to check for invalid input
//R- the word with the highest score, where the location of each letter in the alphabet in that word adds to its score
//E- high('man i need a taxi up to ubud'), 'taxi
//P- split the string down into individual words in an array. store the index of each word and calculate the score

function high(x){
    let alpha = '-abcdefghijklmnopqrstuvwxyz'
    let sentence = x.split(' ')
        .map(word => word
                .split('').
                    reduce((acc,c)=> acc += alpha.indexOf(c), 0))
    return x.split(' ')[sentence.indexOf(Math.max(...sentence))]
}