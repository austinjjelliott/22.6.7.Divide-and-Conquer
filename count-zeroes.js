function countZeroes(arr) {
  let firstZero = findFirstZero(arr);
  if (firstZero === -1) return 0; //This gives you 0 if no 0s are found
  return arr.length - firstZero; //This gives you the amount of zeros when there are 0s present
}

function findFirstZero(arr, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === 0 && (mid === 0 || arr[mid - 1] === 1)) {
      return mid; //This is how we guarantee its the FIRST zero
    } else if (arr[mid] === 1) {
      return findFirstZero(arr, mid + 1, high); //This means if the value at the middle index is 1, try again but shift the starting point from 0 to 1 above the current middle index
    }
    return findFirstZero(arr, low, mid - 1); //this means if the value of arr[mid] === 0, try again from zero but shift down the high to 1 under the mid index (which we know gives a 0 already)
  }
  return -1; //This means no zeros were found
}
module.exports = countZeroes;


//Instructions:
// countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a 
// function called countZeroes, which returns the number of zeroes in the array.
// Constraints:
// Time Complexity: O(log N)
// Examples:
// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0