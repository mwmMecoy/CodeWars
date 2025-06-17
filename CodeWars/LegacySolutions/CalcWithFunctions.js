// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function command(number, math){
	if(math==null){
		return number
  }
	return math(number)
}
function zero(operation) { return command(0, operation); }
function one(operation) { return command(1, operation); }
function two(operation) { return command(2, operation); }
function three(operation) { return command(3, operation); }
function four(operation) { return command(4, operation); }
function five(operation) { return command(5, operation); }
function six(operation) { return command(6, operation); }
function seven(operation) { return command(7, operation); }
function eight(operation) { return command(8, operation); }
function nine(operation) { return command(9, operation); }

function plus(x) {
	return function(y) {
		return Math.floor(y + x)
	}
}
function minus(x) {
	return function(y) {
		return Math.floor(y - x)
	}
}
function times(x) {
	return function(y) {
		return Math.floor(y * x)
	}
}
function dividedBy(x) {
	return function(y) {
		return Math.floor(y / x)
	}
}