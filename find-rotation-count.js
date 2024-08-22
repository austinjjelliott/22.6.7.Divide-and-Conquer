function findRotationCount() {
    let smallestNumIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[smallestNumIdx]) {
      smallestNumIdx = i;
    }
  }
  return smallestNumIdx;
}

module.exports = findRotationCount

/*Instructions:
findRotationCount
Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.
Constraints:
Time Complexity: O(log N)
Examples:
findRotationCount([15, 18, 2, 3, 6, 12]) // 2
findRotationCount([7, 9, 11, 12, 5]) // 4
findRotationCount([7, 9, 11, 12, 15]) // 0
*/