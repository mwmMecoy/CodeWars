// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

//PREP
//P: a single array consisting of 5 whole numbers between 1 and 6. Length of the array will always be 5 with no other values needing to be checked for.
//R: The total score of the roll, no scoring points should return 0.
//E: 
// Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
//P: Let's go for the power of brute force while my brain wakes up. Cycle through the array and have a counter for each number and a single integer keeping track of the score. At the end if any counter is higher than 3 we will add the score to the total, then add the extra score for the single 1s and 5s.
//Returning to the pseudo with a better idea! Going to make an array to keep the count in. Cycling through that should work great to calculate the scores, and will only need a special section to check for the 3 1s

function score( dice ) {
    // Fill me in!
    let score = 0;
    let rollCount = new Array(6).fill(0);
    //Looping through the dice array and incrementing the count for the corresponding spot in the rollCount.
    for(let i = 0; i < dice.length; i++) {
        rollCount[dice[i]-1]++
    }
    //now cycle through the rollCount and check to see if any of them are > 3, but first we have to pick out the 1s individually
    if(rollCount[0] >= 3) {
        score += 1000;
        rollCount[0] -= 3;
    }
    for(let i = 1; i < rollCount.length; i++) {
        if(rollCount[i] >= 3) {
            score += (i+1)*100
            rollCount[i]-=3
        }
    }
    //Finally add the remaining 1s and 5s
    score += (100*rollCount[0]) + (50*rollCount[4])
    return score;
}
console.log(score( [2, 3, 4, 6, 2] ) == 0,   "Should be 0 :-(" );
  
console.log( score( [4, 4, 4, 3, 3] ) == 400, "Should be 400" );
  
console.log( score( [2, 4, 4, 5, 4] ) == 450, "Should be 450" );