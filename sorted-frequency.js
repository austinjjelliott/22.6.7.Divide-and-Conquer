function sortedFrequency(arr, num) {
  numCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(num) === false) {
      return -1;
    }
    if (arr[i] === num) {
      numCount += 1;
    }
  }
  return numCount;
}

module.exports = sortedFrequency;

// Given a sorted array and a number, write a function called sortedFrequency
// that counts the occurrences of the number in the array

// Examples:
// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1
