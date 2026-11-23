function increasingTriplet(nums: number[]): boolean {
  if (nums.length < 3) {
    return false;
  }

  let minInd = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] < nums[minInd]) minInd = i;
  }

  let counter = 1;

  for (let i = minInd + 1; i < nums.length; i++) {
    if (nums[i] > nums[minInd]) {
      counter++;
      minInd = i;
    }
    if (counter === 3) return true;
  }

  return false;
}

console.log(increasingTriplet([1, 2, 3, 4, 5]));

console.log(increasingTriplet([5, 4, 3, 2, 1]));

console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));

console.log(increasingTriplet([0, 4, 2, 1, 0, -1, -3]));

console.log(increasingTriplet([1, 5, 0, 4, 1, 3]));
