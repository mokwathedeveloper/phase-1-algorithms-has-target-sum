function hasTargetSum(array, target) {
  // Sort the array to make it easier to find pairs
  array.sort((a, b) => a - b);

  // Use two pointers approach
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const currentSum = array[left] + array[right];

    if (currentSum === target) {
      // Found a pair that adds up to the target
      return true;
    } else if (currentSum < target) {
      // Move the left pointer to increase the sum
      left++;
    } else {
      // Move the right pointer to decrease the sum
      right--;
    }
  }

  // No pair found
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/
// The time complexity is O(n log n) due to the sorting operation.

/* 
  Add your pseudocode here
*/
/*
  1. Sort the input array in ascending order.
  2. Initialize two pointers, left at the beginning and right at the end of the array.
  3. Iterate while left < right:
      a. Calculate the sum of the elements at the left and right pointers.
      b. If the sum is equal to the target, return true.
      c. If the sum is less than the target, move the left pointer to the right.
      d. If the sum is greater than the target, move the right pointer to the left.
  4. If no pair is found, return false.
*/

/*
  Add written explanation of your solution here
*/
/*
  The function first sorts the input array, making it easier to find pairs that add up to the target. It then uses the two pointers approach, starting from the beginning and end of the sorted array. In each iteration, it calculates the sum of the elements at the pointers. If the sum is equal to the target, the function returns true. If the sum is less than the target, it means we need a larger sum, so the left pointer is moved to the right. If the sum is greater than the target, it means we need a smaller sum, so the right pointer is moved to the left. This process continues until either a pair is found or the pointers meet. If the pointers meet and no pair is found, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
