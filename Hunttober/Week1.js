// The Challenge - Day 1
// This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

// Oh no! How did this happen?! Somehow similar-looking numbers and letters have been confused in our document. Someone may have been messing around writing naughty words on a calculator. We need to get them back to normal.

// Below, find the mix-ups that have been made. Note: the confusion happened in both directions and was case-sensitive.
// '0' <-> 'O'      '5' <-> 'S'
// '1' <-> 'I'      '6' <-> 'G'
// '2' <-> 'Z'      '7' <-> 'L'
// '3' <-> 'E'      '8' <-> 'B'
// '4' <-> 'h'      '9' <-> 'q'
// As an example, here is how a string looks before and after the characters are fixed:

// "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." 
// // implement fix function -> 
// "PRO-TIP #498: IT'S NICE TO SAY HELLO."

function day1Decode(scrambled){
    let leftarr = ['0','1','2','3','4','5','6','7','8','9']
    let rightarr = ['O','I','Z','E','h','S','G','L','B','q']

    let unscrabled = []
    for(let i = 0; i < scrambled.length; i++){
        if(leftarr.includes(scrambled[i])){
            unscrabled.push(rightarr[leftarr.indexOf(scrambled[i])])
        } else if(rightarr.includes(scrambled[i])){
            unscrabled.push(leftarr[rightarr.indexOf(scrambled[i])])
        } else {
            unscrabled.push(scrambled[i])
        }
    }

    return(unscrabled.join('')) 
}

//console.log(day1Decode("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."))

// It turns out that a cat snuck in the house and decided to do some typing while I was away from my desk. Lucky break though, somehow the last key the cat managed to type was a lowercase 'c', and it also somehow managed to be the only lowercase 'c' the cat typed.

// If we remove everything up to and including that first 'c' we'll be at a great starting point! Go ahead and scrap all that cat scratch from the string below.

// "af)|Cz>:CGAHY1_2+(OHYYTM!2vka,&yAlWJ3.r&ZVs4F5&bEa<1r1_nlsR!eA-dOUmgwd2=CE7?ynnl+KQf8lW8u4/Nh1|D7SK2uYz-Y $YD)q.VmLD-&P(lL=:HDMA1!?_R#P,V3bKLqUp_t.X:_dM<Mr9zQ~fKJOBDF&Qjen=d ZAR8ze5g-gj@aZ/I:M:!.IBXLq@vN&8L7oH, /0RFtH+.7%eXtM/mxV7*%0Hj.?FSm.Kh8=@jlUJ_S.ApQzye-xB7ZVA2AwEaxTa_snPX?>D5th&Ag/9)7%#uMN=J<h!#prB=:CI;U_.T5*#rb)9q<ht~W<BOmQlmy.<8EqIlR(Gh~~$zmW;Y$7dn-$bW1jf%PL),krpzE LQwsG;EQ;l:Z;+6#.3)KDA+s#k#YMmUhm% 2KB)GqR U@4B>+A9Vh62@:&SNKVas5%&N6Oz!s/%7(Pd1xWy#Kv>uqyX=VEyHbe-64|ex^& 2W(gD=>FT*?tMZO$(+B8uTj,DU2~QST(B|xls=9kzN|:4hXt~:R4|nir,6RN8fg~3!3!^!yWZ)bE@SI.zV5Z%V9Qf_^ 4az$?wqtWrRu+1aS9<%I=!xW.:ps f).($Qz9s;8:uxVqJN9K$42NG(0=j)wZ&U1oB?v^7WVP6QE6-?L;^aglPd5dHO(L2TT5+$NeK-P;js-UAiWCI7>Yr&8|md-X)U=%IpuY)9iymv~ _S^ ,&0|(22&(mIcux_4a196w^FN78kz2kX1k&Psc53d ctbl?Eek!kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AevEek!ux_4a196w^FN7Eek!8kz2kX1k&Psc53d ctbl?kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AEek!Eek!cvEek!MABf|bEek!dPLpPhh=>%UH<%/^H;8gSAkhmUCu:K?*jzEek!LYC/:E*RU=|s7jWDf8z7-zFqS<Ntoav?m8<Q(1ur3Dpd)(XjY1pE)but>eG@QfEek!$Wx8NRZgmQ5t2 kJd,?_R@%muEJBTdQ0-%mHHW20i8wqMK~Co^w?34ag9idsTeXgfqy4IEek!z7Q?Q)nG~5@~ieY_B=6! sVk~=Ts3T>j/ZAS)AKX3zOocGL icK#-x0Eek!yE+2*fz.4&%<>:RHx/B+IFRG*AK1Hn*PQZpEek!v;ZUzWcJC%lym^:+;GcC!qt@nS5SQEek!ikESbYI#-A.Sv .ksat s'worrEek!Eek!omot Eek!rof rebmeEek!merEek! Eek!ot deeEek!n uoy tahw si enEek!o tsrif siht sedisEek!eb gnirtsbus hcae ni retEek!carahc tsrifEek! eEek!Eek!hT .'V' *esaEek!crewEek!ol* nEek!Eek!o pu Eek!gnirts Eek!siEek!ht tilpEek!S"
// Done it? Awesome. Next, it's just a simple matter of undoing what happens when a preschooler dumps a bucket of LEGO blocks on the keyboard. Kids, amiright? You'll want to remove all the instances of the word 'Eek!' in the remaining string please (case sensitive, of course).

// Oh, I also forgot that I accidentally reversed the whole string too. Flip it back around after you've dealt with the 'Eek!'s, if you will.

// It should be looking a lot better now. I left the instructions for what to do now at the start of the remaining string. Do what it says and save the answer somewhere safe for tomorrow's challenge - it's key info.



function day2Decode(catString){
    let fixedStr = catString.substring(732)
    count = 0
    while(fixedStr.includes('Eek!')){
        fixedStr = fixedStr.replace('Eek!', '')
    }

    return fixedStr.split('').reverse().join('').split('v');
}

console.log(day2Decode("af)|Cz>:CGAHY1_2+(OHYYTM!2vka,&yAlWJ3.r&ZVs4F5&bEa<1r1_nlsR!eA-dOUmgwd2=CE7?ynnl+KQf8lW8u4/Nh1|D7SK2uYz-Y $YD)q.VmLD-&P(lL=:HDMA1!?_R#P,V3bKLqUp_t.X:_dM<Mr9zQ~fKJOBDF&Qjen=d ZAR8ze5g-gj@aZ/I:M:!.IBXLq@vN&8L7oH, /0RFtH+.7%eXtM/mxV7*%0Hj.?FSm.Kh8=@jlUJ_S.ApQzye-xB7ZVA2AwEaxTa_snPX?>D5th&Ag/9)7%#uMN=J<h!#prB=:CI;U_.T5*#rb)9q<ht~W<BOmQlmy.<8EqIlR(Gh~~$zmW;Y$7dn-$bW1jf%PL),krpzE LQwsG;EQ;l:Z;+6#.3)KDA+s#k#YMmUhm% 2KB)GqR U@4B>+A9Vh62@:&SNKVas5%&N6Oz!s/%7(Pd1xWy#Kv>uqyX=VEyHbe-64|ex^& 2W(gD=>FT*?tMZO$(+B8uTj,DU2~QST(B|xls=9kzN|:4hXt~:R4|nir,6RN8fg~3!3!^!yWZ)bE@SI.zV5Z%V9Qf_^ 4az$?wqtWrRu+1aS9<%I=!xW.:ps f).($Qz9s;8:uxVqJN9K$42NG(0=j)wZ&U1oB?v^7WVP6QE6-?L;^aglPd5dHO(L2TT5+$NeK-P;js-UAiWCI7>Yr&8|md-X)U=%IpuY)9iymv~ _S^ ,&0|(22&(mIcux_4a196w^FN78kz2kX1k&Psc53d ctbl?Eek!kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AevEek!ux_4a196w^FN7Eek!8kz2kX1k&Psc53d ctbl?kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AEek!Eek!cvEek!MABf|bEek!dPLpPhh=>%UH<%/^H;8gSAkhmUCu:K?*jzEek!LYC/:E*RU=|s7jWDf8z7-zFqS<Ntoav?m8<Q(1ur3Dpd)(XjY1pE)but>eG@QfEek!$Wx8NRZgmQ5t2 kJd,?_R@%muEJBTdQ0-%mHHW20i8wqMK~Co^w?34ag9idsTeXgfqy4IEek!z7Q?Q)nG~5@~ieY_B=6! sVk~=Ts3T>j/ZAS)AKX3zOocGL icK#-x0Eek!yE+2*fz.4&%<>:RHx/B+IFRG*AK1Hn*PQZpEek!v;ZUzWcJC%lym^:+;GcC!qt@nS5SQEek!ikESbYI#-A.Sv .ksat s'worrEek!Eek!omot Eek!rof rebmeEek!merEek! Eek!ot deeEek!n uoy tahw si enEek!o tsrif siht sedisEek!eb gnirtsbus hcae ni retEek!carahc tsrifEek! eEek!Eek!hT .'V' *esaEek!crewEek!ol* nEek!Eek!o pu Eek!gnirts Eek!siEek!ht tilpEek!S"))

//
//'S-p-a-c-e' is the key
//

// We need to create a function that will replace any instances of any of the key characters in a given string with an empty space (' '). See below for an example with an example set of key characters.

// Remember to keep your code somewhere safe, as you'll need it to decrypt this week's message!

function day3Decode(str, key){
    let filtered = []
    for(let i = 0; i < str.length; i++){
        if(key.includes(str[i])){
            filtered.push(' ')
        } else{
            filtered.push(str[i])
        }
    }

    return filtered.join('')
}

//console.log(day3Decode('AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters', ['A','_','K','E','Y','!']))

// Today is simple! Given a string, reverse it. Any details like whitespace, letter casing, or punctuation should be preserved and flipped along with the rest of the string. For example:


function day4Decode(str){
    return str.split('').reverse().join('')
}


// There are some very strict rules that the pun submissions had to follow. I need to know which of these cat puns made the cut. I promise tomorrow we'll get back to decoding our secret message, and coincidentally, I'm pretty sure the number of these puns that met the criteria will match a key sequence value we'll need tomorrow. Isn't that lucky?

// Here are the rules these submissions had to follow:
// No empty spaces at the start or end of the submission (my friend can't stand when people don't follow directions)
// Cannot contain 'dog', 'bark', or 'bone' in any combination of upper or lower case (canine trolling can't be stopped)
// Total length of pun cannot be a multiple of 5 (this includes spaces and punctuation)
// The sum of the charCodes of the 1st and last characters must be odd (my friend's a bit of a character, but she's great once you get to know her)
// Middle character may not be 'e' (if there are an even number of characters, look at the next one after mid-point. For example center has a middle character of t)
// Must have an even number of lowercase letters (do not count punctuation or spaces as letters)
// Must have at least 2 capital letters (honestly, I'm a little worried these requirements are too strict)
// Must not contain a capital 'S' (definitely too strict. What does S even have to do with cat puns?)
// Send me a DM of the puns that made the cut on Twitter, and go ahead and save the final count to use tomorrow. Thanks!

// "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"

function day5Decode(str){
    let arr = str.split(',')
    arr = arr.filter(x => 
                        x == x.trim()
                        && !x.toLowerCase().includes("dog") 
                        && !x.toLowerCase().includes("bark") 
                        && !x.toLowerCase().includes("bone")
                        && x.length % 5 != 0 
                        && (x.charCodeAt(0)+ x.charCodeAt(x.length-1)) % 2 == 1 
                        && x[Math.ceil(x.length/2)].toLowerCase() != 'e'
                        && countLower(x) % 2 == 0
                        && countUpper(x) >= 2
                        && !x.includes('S')
                        )
    return arr;
}

function countLower(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i].toLowerCase() == str[i] && str[i].toLowerCase() != str[i].toUpperCase()){
            count++
        }
    }
    return count;
}

function countUpper(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i].toUpperCase() == str[i] && str[i].toLowerCase() != str[i].toUpperCase()){
            count++
        }
    }
    return count;
}

console.log(day5Decode("The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood").length)


// Write a function that, when given a non-empty string, and positive integer X, removes every Xth character from the string. Counting should begin from the first element in the string and should continue in that pattern until the end of the string.

// // For the string below and 4
// "Thies its H alltowe!en!? Th#is Tis GHalolomeen$!"
// // remove decoy strings
// "This is Halloween! This is Halloween!"

// // For the string below and 5
// "The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow."
// // remove decoy strings and preach 🙌
// "The Bachelor is a terrible television show."

function day6Decode(str, num){
    let arr = []
    for(let i = 0; i < str.length; i++){
        if((i+1) % num != 0){
            arr.push(str[i])
        }
    }
    return arr.join('')
}

//console.log(day6Decode("The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow.", 5))


// create a function that swaps each letter of the alphabet for its opposite. A letter's opposite is one that, if the alphabet were flipped Z-A, would be the same number of letters in, and which would also have the opposite case.

// Examples:
// 'A'  // first letter of the alphabet, uppercase
// 'z'  // last letter of the alphabet, lowercase

// 'p'  // 16th letter of the alphabet, lowercase
// 'K'  // 16th letter from *end* of alphabet, uppercase

// 'vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'
// // function replaces letters with opposites
// 'Example: 0 number or punctuation changes'

function day7Decode(str){
    const alphaReverse = {
        'A':'z',
        'B':'y',
        'C':'x',
        'D':'w',
        'E':'v',
        'F':'u',
        'G':'t',
        'H':'s',
        'I':'r',
        'J':'q',
        'K':'p',
        'L':'o',
        'M':'n',
        'N':'m',
        'O':'l',
        'P':'k',
        'Q':'j',
        'R':'i',
        'S':'h',
        'T':'g',
        'U':'f',
        'V':'e',
        'W':'d',
        'X':'c',
        'Y':'b',
        'Z':'a',
    }


    let reverseArr = []
    for(let i = 0; i < str.length; i++){
        if(str[i].toLowerCase() == str[i] && str[i].toLowerCase() != str[i].toUpperCase()){
            reverseArr.push(Object.keys(alphaReverse).find(key => alphaReverse[key] == str[i]))
        } else if(str[i].toUpperCase() == str[i] && str[i].toLowerCase() != str[i].toUpperCase()){
            reverseArr.push(alphaReverse[str[i]])
        } else{
            reverseArr.push(str[i])
        }
    }
    return reverseArr.join('')
}

console.log(day7Decode('vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'))

// FINAL SOLUTION

const encryptedMsg = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"
let decryptedMsg = ''
decryptedMsg = day1Decode(encryptedMsg)
console.log(decryptedMsg)
decryptedMsg = day3Decode(decryptedMsg, ['S', 'p', 'a', 'c', 'e'])
console.log(decryptedMsg)
decryptedMsg = day4Decode(decryptedMsg)
console.log(decryptedMsg)
decryptedMsg = day6Decode(decryptedMsg, 3)
console.log(decryptedMsg)
decryptedMsg = day7Decode(decryptedMsg)
console.log(decryptedMsg)