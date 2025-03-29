/*
  Problem: Chunk an Array

  Given an array and a chunk size, divide the array into smaller subarrays, 
  where each subarray has a maximum length of the given chunk size.

  Example 1:
  Input: ([1, 2, 3, 4, 5, 6, 7, 8], 3)
  Output: [[1, 2, 3], [4, 5, 6], [7, 8]]

  Example 2:
  Input: ([1, 2, 3, 4, 5, 6], 2)
  Output: [[1, 2], [3, 4], [5, 6]]

  Constraints:
  - The input array will always have at least one element.
  - The chunk size will always be a positive integer.
*/

// Solution 1: Using Nested Loops
function chunk(arr, size) {
  const chunkedArray = [];
  for (let i = 0; i < arr.length; i = i + size) {
    let chunks = [];

    for (let j = i; j < i + size && j < arr.length; j++) {
      chunks.push(arr[j]);
    }

    chunkedArray.push(chunks);
  }

  return chunkedArray;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))

// Solution 2: Using Array Slice
function chunk2(arr, size) {
  const chunkedArray = []
  for (let i = 0; i < arr.length; i += size) {
    chunkedArray.push(arr.slice(i, i + size))
  }
  return chunkedArray
}

console.log(chunk2([1, 2, 3, 4, 5, 6, 7, 8], 3))