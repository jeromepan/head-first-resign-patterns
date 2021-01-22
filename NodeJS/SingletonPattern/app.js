const calc = require('./CircleCalcutator')

let circle = new calc(5)

console.log(`Area of the circle: ${circle.calcArea()}`)
console.log(`Circumference of the circle: ${circle.calcCirc()}`)