


const numbers = [2, -5, 0, 7, -3, 0, 10, -8]

const positiveNumbers = numbers.filter(number => number > 0)
const negativeNumbers = numbers.filter(number => number < 0)
const zeroNumbers = numbers.filter(number => number === 0)  

console.log(positiveNumbers) 
console.log(negativeNumbers) 
console.log(zeroNumbers) 

