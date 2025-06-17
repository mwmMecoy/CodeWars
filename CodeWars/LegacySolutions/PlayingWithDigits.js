// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

//P:2 numbers that will always be a positive integers. The first will be the number to be tested, and the 2nd will be the power to which the first digit of the first number will be raised to, increasing 1 for each additional number after that.
//R: the positive integer k such that the sum of the inividual integers of n risen to their powers is equal to n*k
//E: digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
//P:break down n into inidivual numbers, raise them to the power of p, and sum them. See if the sum is evenly divisible by n, then return the result of that division or negative 1 if not

function digPow(n, p){
    // ...
    let sum = String(n).split('').map((x, i) => parseInt(x)**(p+i)).reduce((acc,c) => acc+c)
    return sum % n == 0? sum/n : -1
}