// Coding 3min : Jumping Dutch act

// This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

// Task:
// Mr. despair wants to jump off Dutch act, So he came to the top of a building.

// Scientific research shows that a man jumped from the top of the roof, when the floor more than 6, the person will often die in an instant; When the floor is less than or equal to 6, the person will not immediately die, he would scream. (without proof)

// Input: floor, The height of the building (floor)

// Output: a string, The voice of despair(When jumping Dutch act)

// Example:
// sc(2) should return "Aa~ Pa! Aa!"

// It means:

// Mr. despair jumped from the 2 floor, the voice is "Aa~"
// He fell on the ground, the voice is "Pa!"
// He did not die immediately, and the final voice was "Aa!"
// sc(6) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"

// sc(7) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

// sc(10) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

// if floor<=1, Mr. despair is safe, return ""

// The final advice
// Just play in this kata, Don't experiment in real life ;-)

//PREP
//P: A round number only. The first floor won't count wince that's where they will hit the ground. Any number less than 2 will not have a response
//R: A string that the length of which will coinside with the numnber of floors faller
//E sc(7) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", if floor<=1, Mr. despair is safe, return ""
//P: Check that the floor is higher than 2, add a string for each level of the floor that they call, then add them hitting the ground. If the floor wasn't high enough add one more string

function sc(floor){
    if(floor < 2) return ""
    let arr = new Array(floor-1).fill('Aa~')
    arr.push('Pa!')
    if(floor <= 6) {
      arr.push("Aa!")
    }
    return arr.join(' ')
  }

  console.log(sc(2), "Aa~ Pa! Aa!", "good luck!");  
  console.log(sc(6), "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!", "good luck!"); 
  console.log(sc(7), "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!"); 
  console.log(sc(10), "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!"); 
  console.log(sc(1), "", "good luck!"); 
  console.log(sc(-1), "", "good luck!"); 