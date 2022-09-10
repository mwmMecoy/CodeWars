// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

//p - the quanity of mangoes and the price on each one, both as whole integers
//r - the total discounted cost of the mangoes
//e - 
// mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free
//p - get the total cost of all mangoes, then subtract the amount for the free ones

function mango(quantity, price){
    return quantity*price - Math.floor(quantity/3)*price
}