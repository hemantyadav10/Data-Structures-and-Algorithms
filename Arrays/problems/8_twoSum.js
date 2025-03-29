/*
  Problem: Two Sum
  Given an array of integers and a target sum, find the indices of two numbers that add up to the target.
  You may assume that each input has exactly one solution, and you may not use the same element twice.

  Example:
  Input: [2, 7, 11, 15], Target: 9
  Output: [0, 1] (Because 2 + 7 = 9)
*/

/** Finds two indices in an array whose sum equals the target. */
function twoSum(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j]
      }
    }
  }
  return []
}

console.log(twoSum([2, 7, 11, 15], 9))