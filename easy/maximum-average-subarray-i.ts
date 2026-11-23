function findMaxAverage(nums: number[], k: number): number {
  if (nums.length === 1) {
    return nums[0] / k;
  }

  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }

  let sum = maxSum;

  if (k === 1) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > maxSum) {
        maxSum = nums[i];
      }
    }
  } else {
    for (let i = k; i < nums.length; i++) {
      sum = sum - nums[i - k] + nums[i];

      if (sum > maxSum) maxSum = sum;
    }
  }

  return maxSum / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));

console.log(findMaxAverage([0, 4, 0, 3, 2], 1));

console.log(findMaxAverage([5], 1));

console.log(findMaxAverage([4, 2, 1, 3, 3], 2));
