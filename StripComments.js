// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

// ugly for loops

function solution(input, markers) {
    let lines = input.split("\n")
    for(let i = 0; i < lines.length; i++) {
      for(let j = 0; j< markers.length; j++) {
        if(lines[i].includes(markers[j])) {
          lines[i] = lines[i].slice(0, lines[i].indexOf(markers[j]))
        }
      }
    }
    for(let i = 0; i < lines.length; i++) {
      lines[i] = lines[i].trim();
    }
    return lines.join('\n')
  };

//short split-map-reduce function
function solution(input, markers) {
    return input.split('\n').map(
      line => markers.reduce(
        (line, marker) => line.split(marker)[0].trim(), line
      )
    ).join('\n')
  }

console.log("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges")
console.log("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne")