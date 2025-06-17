// Define a method/function that removes from a given array of integers all the values contained in a second array.

//P - 2 arrays, the original array and the integers to be removed
//R - the 1st array with all elements of the 2nd array removed
//E
// * [1, 1, 2 ,3 ,1 ,2 ,3 ,4], [1, 3] -> [2, 2, 4]
// * [1, 1, 2 ,3 ,1 ,2 ,3 ,4, 4, 3 ,5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6 ,7 ,8]
// * [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2 , 3], [2, 4, 3] -> [8, 7, 6, 5, 1]
//P - Filter the 1st array, using the ! and the elements of the 2nd array as the filter

Array.prototype.remove_ = function(integer_list, values_list){
    //your code here
    return integer_list.filter(x => !values_list.includes(x))
}