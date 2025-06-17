// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

//PREP
//P: array of whole numbers, array never empty
//R: return most frequent number, if there is a tie returnt the largest of the 2
//E: See instructions
//P: -

function highestRank(arr){
    //Your Code logic should written here
    //This object will contain the instances of each number
    let hash={}
        
    //looping through entire array
    for(let i=0;i<arr.length;i++){
        //if this number exists in the obj, increment it by 1, otherwise add it and set it to 1
        if(hash[arr[i]]){
            hash[arr[i]]++
        } 
        else {
            hash[arr[i]]=1
        }
    }
        
        let countMax=0;
        let valueMax=0;
        //For each element in the obj, if it has the highest frequency so far set it to the value to be returned. If the frequency is equal we will check to see which value is larger
        for(element in hash){
            if(countMax<=hash[element]){
                valueMax=Math.max(element,valueMax)
                countMax=Math.max(hash[element],countMax)
            }
    }
    return valueMax
}