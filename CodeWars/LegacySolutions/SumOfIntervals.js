// Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

// [
//    [1,4],
//    [7, 10],
//    [3, 5]
// ]
// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

// Examples:
// sumIntervals( [
//    [1,2],
//    [6, 10],
//    [11, 15]
// ] ); // => 9

// sumIntervals( [
//    [1,4],
//    [7, 10],
//    [3, 5]
// ] ); // => 7

// sumIntervals( [
//    [1,5],
//    [10, 20],
//    [1, 6],
//    [16, 19],
//    [5, 11]
// ] ); // => 19
// Random Tests
// 100 tests with 1 - 10 intervals from the range [-20, 20]
// 100 tests with 20000 - 50000 intervals from the range [-10^9, 10^9]

//Found a sort function for 2d arrays and implemented to get it done just incrementing through the array with a while loop
function sumIntervals(intervals) {
    //TODO
    //sort arrays, create initial value of sum
    intervals = intervals.sort(sortFunction)
    let sum = 0;
    sum += intervals[0][1]-intervals[0][0]
    
    //while the array is still around, check to see if the first digit of the next array is not higher than the higher digit in the current array, if it is then increase it to match the number in the current array to prevent overlap.
    // remove the tested array and add the value of the next one to sum
    while(intervals.length > 1) {
        if(intervals[1][0] <= intervals[0][1]) {
            intervals[1][0] = intervals[0][1];
            intervals.shift()
            sum += intervals[0][1]-intervals[0][0]
        } else {
            intervals.shift()
            sum += intervals[0][1]-intervals[0][0]
        }
    //A new challenger appears, if the 2nd digit in the next array is lower than the 2nd digit in the one we just added, we need to get rid of it
        while(intervals.length > 0 && check <= intervals[0][1]){
            intervals.shift()
        }
    }
    return sum
}
    
function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}


//This quickly became a scrambled mess, returned and attempting to use a reduction in place of the while loops

function sumIntervals(intervals){
    intervals = intervals.sort(function(a, b) { 
      return a[0] - b[0];
    });
    intervals = intervals.reduce(function(acc, n, i, arr) { 
      const anterior = arr[i - 1];
      if (arr.length > 1 && anterior !== undefined) {
        if (n[0] < acc[acc.length - 1]) {
          if (n[1] >= acc[acc.length - 1]) {
            acc[acc.length - 1] = n[1];
          }
        } else {
          acc.push(...n);
        }
      } else {
        acc.push(...n);
      }
      return acc;
    }, []);
    let result = 0;
    for (let i = 0; i < intervals.length - 1 ; i+=2) { 
      result+=(intervals[i + 1] - intervals[i])
    }
    return result
}

//This solution stolen from codewars, shortest that I could process
function sumIntervals(xs) {
    let ys = xs.sort(([a,b], [c,d]) => a-c);
    let m = -Number.MAX_VALUE;
    let res = 0;
    for (let [a,b] of ys) {
      m = Math.max(m, a);
      res += Math.max(0, b-m);
      m = Math.max(m, b);
    }
    return res;
  }



  const test1 = [[1,5],[1,5]];
  const test2 = [[1,4],[7, 10],[3, 5]];
  console.log(sumIntervals(test1), 4);
  console.log(sumIntervals(test2), 7);