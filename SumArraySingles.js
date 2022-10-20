//given array of numbers, 2 numbers will occur only once and the rest occur only twice. Return the sum of the numbers that occur only once

function repeats(arr){
    
    //filter out all of the numbers that occur twice
    //reduce and sum the array which should now only contain 2 numbers
    return arr.filter(x => arr.indexOf(x) == arr.lastIndexOf(x)).reduce((acc, c) => acc+c)
      
};
repeats([4,5,7,5,4,8])
repeats([9, 10, 19, 13, 19, 13])
repeats([16, 0, 11, 4, 8, 16, 0, 11])
repeats([5, 17, 18, 11, 13, 18, 11, 13])
repeats([5, 10, 19, 13, 10, 13])