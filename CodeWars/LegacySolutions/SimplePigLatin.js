// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    //Code here
    str=str.split(' ');
    let igpay = ''
    let arr = []
    for(let i = 0; i < str.length; i++){
        if(str[i][0].toLowerCase() != str[i][0].toUpperCase()){
            igpay = str[i].slice(1)+ str[i][0] + "ay"
        } else{
            igpay = str[i]
        }
        arr.push(igpay)
    }
    return arr.join(' ')
}