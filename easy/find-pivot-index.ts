function pivotIndex(nums: number[]): number {
  let prefixSum: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefixSum[i] = nums[i];
      continue;
    }

    prefixSum[i] = prefixSum[i - 1] + nums[i];
  }

  for (let i = 0; i < prefixSum.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    if (i === 0) {
      rightSum += prefixSum[prefixSum.length - 1] - prefixSum[i];
    } else if (i === prefixSum.length - 1) {
      leftSum += prefixSum[i - 1];
    } else {
      leftSum += prefixSum[i - 1];
      rightSum += prefixSum[prefixSum.length - 1] - prefixSum[i];
    }

    if (rightSum === leftSum) return i;
  }

  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));

console.log(pivotIndex([1, 2, 3]));

console.log(pivotIndex([2, 1, -1]));
