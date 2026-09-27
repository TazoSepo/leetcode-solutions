/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] != 0) {
      nums[left] = nums[right];
      left++;
    }
  }

  while (left < nums.length) {
    nums[left] = 0;
    left++;
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
