// In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:

// x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
// The sections are:

// 0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25
// We can calculate John's average hourly speed on every section and we get:

// [45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]
// Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.

// Example:
// with the above data your function gps(s, x)should return 74

// Note
// With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:

//  (3600 * delta_distance) / s.

//Receiving an array of total distances as decimal values and then the time between those measurements, s
// return the floor of the maximum average speed per hour on the section of x. If the lenght of x is less than or equal to 1 return 0 as there was no distance traveled
//Check for valid array x, return 0 if invalid.
//cycle through array x and create a new array with the difference of the values (the calculated distance)
//grab the largest distance and calculate the speed to be returned

function gps(s, x) {
    // your code
    if(x.length <= 1) return 0

    let avgSpeed = []
    for( let i = 0; i < x.length-1; i++){
        avgSpeed.push(x[i+1]-x[i])
    }
    return Math.max(...avgSpeed)*3600/s
}
