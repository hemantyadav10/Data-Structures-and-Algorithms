/**Reverses a given string*/
function reverseString(str) {
  let reverseString = ''

  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i]
  }

  return reverseString
}

/** Reverses a string using built-in methods */
const reverseString2 = (str) => str.split('').reverse().join("")


console.log(reverseString('hello'))