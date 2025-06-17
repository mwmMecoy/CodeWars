// Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// How I crossed a mountainous desert the smart way.
// The directions given to the man are, for example, the following (depending on the language):

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
// [North, South, South, East, West, North, West]
// You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

// ["WEST"]
// or
// { "WEST" }
// or
// [West]
// Other examples:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

// The Haskell version takes a list of directions with data Direction = North | East | West | South.
// The Clojure version returns nil when the path is reduced to nothing.
// The Rust version takes a slice of enum Direction {North, East, West, South}.
// See more examples in "Sample Tests:"
// Notes
// Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
// if you want to translate, please ask before translating.

//p - an array of direction, no special qualifications for broken inputs needed
//r - the reduced instructions per the requirements
//e - 
// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].
//p - create a variable to track the count of each direction, use these variables to determine how much they cancel each other out and then print the correct reduce directions

function dirReduc(arr){
    // ...
    let directions = []
    for(let i = 0; i < arr.length; i++) {
        //cycleing through to see if the current direction has its opposite next in the array, if so, skip past both
        if(arr[i] == "NORTH" && arr[i+1] == "SOUTH" || arr[i] == "SOUTH" && arr[i+1] == "NORTH" || arr[i] == "EAST" && arr[i + 1] == "WEST" || arr[i] == "WEST" && arr[i+1] == "EAST"){
            i++
        } 
        //If the current direction is not adjacent to its opposite, check to make sure that its opposite is not also the last item added to the final directions. If it is, remove the last item added and move on. If not, push to the final directions
        else {
            if(directions[directions.length- 1] == "NORTH" && arr[i] == "SOUTH" || directions[directions.length-1] == "SOUTH" && arr[i] === "NORTH" || directions[directions.length-1] == "EAST" && arr[i] === "WEST" || directions[directions.length-1] == "WEST" && arr[i] === "EAST"){

                directions.pop()
            } else {
                directions.push(arr[i])
            }
        }
    }

    
    return directions
}