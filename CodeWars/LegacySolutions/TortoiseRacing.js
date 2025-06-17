// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1".

//PREP
//P: receiving only whole numbers. in order: speed of first, speed of second, distance between 1 and 2
//R: the amount of time needed to catch up. This will be returned in the form of an array [hours, minutes, seconds]
//E:
// race(720, 850, 70) => [0, 32, 18] or "0 32 18"
// race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
//P: check if the 2nd racer is slower and return null if true. Get the amount of hours by dividing the distance by the difference between the 2 racers speed.
// convert hours into hours, minutes, seconds, by user modular and math.floor

function race(v1, v2, g) {
    //checking speed
    if(v2 < v1) {
        return null;
    }
    let hours = g/(v2-v1)
    return [Math.floor(hours), Math.floor((hours*60)%60), Math.floor((hours*3600)%60)]
}

console.log(race(720, 850, 70), [0, 32, 18])
console.log(race(80, 91, 37), [3, 21, 49])
console.log(race(80, 100, 40), [2, 0, 0])