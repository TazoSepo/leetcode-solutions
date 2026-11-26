function findDifference(nums1: number[], nums2: number[]): number[][] {
  let set1 = new Set<number>(nums1);
  let set2 = new Set<number>(nums2);

  let arr1: number[] = [];
  let arr2: number[] = [];

  for (let el of set2) {
    if (!set1.has(el)) arr1.push(el);
  }

  for (let el of set1) {
    if (!set2.has(el)) arr2.push(el);
  }

  return [[...arr2], [...arr1]];
}

console.log(findDifference([1, 2, 3], [2, 4, 6]));

console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
