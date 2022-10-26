// Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:

// 1+1+1+1, 1+1+2, 2+2.
// The order of coins does not matter:

// 1+1+2 == 2+1+1
// Also, assume that you have an infinite amount of coins.

// Your function should take an amount to change and an array of unique denominations for the coins:

//   countChange(4, [1,2]) // => 3
//   countChange(10, [5,2,3]) // => 4
//   countChange(11, [5,7]) //  => 0

//THIS SOLUTION DOES NOT MEET REQUIRMENTS
//THIS DOES NOT TAKE INTO ACCOUNT THE FACT THAT THE ORDER DOESN'T MATTER

// function countChange(money, coins) {
//     //base case for if the coins reduce money too far and aren't a valid set
//     if(money < 0) return 0
//     //base case for a valid coin combination
//     if(money === 0) return 1

//     //Store the number of coin combinations
//     let count = 0
    
//     //for each coin in the array we will attempt to subtract to see if it forms a valid set
//     for(let coin of coins){
//         let currMoney = money - coin

//         //recursive call after each coin is subtracted
//         let valid = countChange(currMoney, coins)

//         //If it reaches a valid base case then count is incremented
//         count += valid
//     }
//     return count
// }

function countChange(money, coins) {
    //base case for if the coins reduce money too far and aren't a valid set
    if(money < 0 || coins.length === 0) return 0
    //base case for a valid coin combination
    if(money === 0) return 1

    //This time we recursively call the method, but do 1 call where we reduce the money by the first item in the array and return the same array, and another where we simply remove the first item in from the array
    return (countChange(money - coins[0], coins) + countChange(money, coins.slice(1)))
}

console.log(countChange(0, [1, 2]))
console.log(countChange(4, [1, 2]))