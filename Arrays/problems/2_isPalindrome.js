/*
  A palindrome is a word, phrase, number, or sequence that reads the same forward and backward.
  Example: "racecar", "madam", "121"
 */

  /** Checks if a string is a palindrome */
function isPalindrome(str) {
  return str === str.split('').reverse().join("")
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false