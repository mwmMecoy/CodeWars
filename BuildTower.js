// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.



//P - A positive integer that will define the height of the tower
//R - The constructed tower 
//E - 
// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]
//P - setup tower as an array. Cycle through 'floors' number times with the number of spaces being the total floors minus the current iteration, and the number of stars being 2 times the iteration minus 1. 

function towerBuilder(nFloors) {
    // build here
    let towerBuild = [];
    let spaces, stars;
    for(let i = 1; i < nFloors + 1; i++){
        spaces = ` `.repeat(nFloors-i)
        stars = `*`.repeat((i*2)-1)
        towerBuild.push(spaces+stars+spaces)
    }
    return towerBuild
  }