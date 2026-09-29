/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (!nums.length) {
    return 0;
  }

  let l = 0;
  let r = 0;

  while (r < nums.length) {
    if (nums[r] === val) {
      r++;
    } else {
      nums[l] = nums[r];
      l++;
      r++;
    }
  }

  return l;
};

console.log(removeElement([3, 2, 2, 3], 3));

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

console.log(removeElement([10, 2, 2, 3], 100));
