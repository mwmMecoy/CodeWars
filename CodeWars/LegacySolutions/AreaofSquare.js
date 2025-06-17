// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

//area of square = l x l
// circumference = 2*pi*r
// arc = 2 * pi * radius /4
// arc * 4 = 2*pi*r
// radius - (arc*4) / (2*pi)

function squareArea(A){
  let radius = (A*4) / (2* Math.PI)
  return +Math.pow(radius, 2).toFixed(2)
}