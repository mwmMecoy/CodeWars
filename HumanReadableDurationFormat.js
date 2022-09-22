// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:


// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

// Receiving a number of seconds as an integer. No need to check for invalid input
// Return the seconds converted to the time in text format
// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// check to see if the number of seconds is 0 and return now if so.
// store all of the time types in an array
// calculate the amount of time for each type
// go through and check the quantity of each type to build the human readable version

function formatDuration(seconds) {
    if(seconds == 0) return 'now'
    let timeTypes = ['year', 'day', 'hour', 'minute', 'second']
    let timeAmounts = [0, 0, 0, 0, 0]
    //get the total number of minutes and use it to get the total number of hours, then set minutes
    timeAmounts[3] = Math.floor(seconds/60)
    //set seconds
    timeAmounts[4] = seconds % 60
    timeAmounts[2] = Math.floor(timeAmounts[3]/60)
    timeAmounts[3] = timeAmounts[3] % 60
    //Use total number of hours to get total number of days, then set hours
    timeAmounts[1] = Math.floor(timeAmounts[2]/24)
    timeAmounts[2] = timeAmounts[2] % 24
    //Use total number of days to get total number of years, then set days
    timeAmounts[0] = Math.floor(timeAmounts[1]/365)
    timeAmounts[1] = timeAmounts[1] % 365


    // Check the quantity of each type to construct the return string
    let finalAnswerArr = []

    //Turn the time into plural if needed
    for(let i = 0; i < timeAmounts.length; i++){
        if(timeAmounts[i] == 1){
            finalAnswerArr.push(timeAmounts[i] + ' ' + timeTypes[i])
        } else if(timeAmounts[i] > 1){
            finalAnswerArr.push(timeAmounts[i] + ' ' + timeTypes[i] + 's')
        }
    }

    console.log(finalAnswerArr)

    //Check the number of types that were used to determine where the 'and' needs to go
    //if it is necessary
    let finalAnswerStr = ''

    for(let i = 0; i < finalAnswerArr.length; i++){
        //Place the and right before the last element
        if(i == finalAnswerArr.length -2){
            finalAnswerStr += finalAnswerArr[i] + ' and ' + finalAnswerArr[i+1]
            break;
        }
        //add a comma if there are enough items remaining
        if(i != finalAnswerArr.length-1){
            finalAnswerStr += finalAnswerArr[i] + ', '
        } else {
            finalAnswerStr += finalAnswerArr[i]
        }
    }
    
    return finalAnswerStr
} 