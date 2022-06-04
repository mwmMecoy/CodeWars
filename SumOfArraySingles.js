// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

//PREP
//P: receiving an array of whole numbers, 2 numbers in the array will only occur once. Need to find those and add them together
//R: return the sum of the 2 numbers in the array that only occur once.
//E: For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

//P: filter out the duplicate numbers by checking if they have the same first and last index in the provided array, if so add them to the sum

function repeats(arr){
    //..
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i])==arr.lastIndexOf(arr[i])) sum+=arr[i]
    }
    return sum
};