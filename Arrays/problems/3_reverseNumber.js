/** Reverses the digits of a number and returns the new number */
function reverseNumber(num) {
  return Number(num.toString().split('').reverse().join(''))
}

console.log(reverseNumber(5634))