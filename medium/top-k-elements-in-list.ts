class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */

  //greedy
  topKFrequent(nums: number[], k: number): number[] {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
        map.set(nums[i], map.get(nums[i]) + 1);
      } else {
        map.set(nums[i], 1);
      }
    }

    const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

    const topK = [...sortedMap.keys()].slice(0, k);

    return topK;
  }
}

const solution = new Solution();
console.log(solution.topKFrequent([1, 2, 2, 3, 3, 3], 2));
