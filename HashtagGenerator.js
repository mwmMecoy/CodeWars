// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

//Going to have to add '#' to beginning of each string
//Will have to cycle through each word and capitalize the first letter
//Check if input or result is empty before adding #, or if final result > 140 characters and return false

function generateHashtag (str) {
    //remove extra space from the string
    str = str.replace(/\s/g, '')

    //check if input is empty and return false if so
    if(str.length==0) return false

    //convert the string into an array of the words
    let words = str.split(' ')

    //capitalize the first letter of each word
    words = words.map(word =>{
        return word.charAt(0).toUpperCase() + word.slice(1)
    })

    //combine the array back into a string of the words and check length
    let capsStr = words.join('')
    if(capsStr.length > 140) return false

    //add # and return
    return '#'+capsStr
}