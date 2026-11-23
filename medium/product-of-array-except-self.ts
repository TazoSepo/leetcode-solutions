function productExceptSelf(nums: number[]): number[] {
  let res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    res[i] = 1;
  }

  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;
  for (let i = nums.length - 1; i > -1; i--) {
    res[i] *= postfix;
    postfix *= nums[i];
  }
  return res;
}

console.log(productExceptSelf([1, 2, 3, 4]));

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
