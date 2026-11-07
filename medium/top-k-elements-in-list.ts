class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */

  // optimal
  topKFrequent(nums: number[], k: number): number[] {
    let map = new Map();
    const freq: number[][] = Array.from({ length: nums.length + 1 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
        map.set(nums[i], map.get(nums[i]) + 1);
      } else {
        map.set(nums[i], 1);
      }
    }

    for (const [key, value] of map) {
      freq[value].push(key);
    }

    let res = [];

    for (let i = freq.length - 1; i > 0; i--) {
      if (freq[i].length) {
        for (let j = 0; j < freq[i].length; j++) {
          res.push(freq[i][j]);
          if (res.length === k) return res;
        }
      }
    }

    return res;
  }
}

const solution = new Solution();
console.log(solution.topKFrequent([1, 2, 2, 3, 3, 3], 2));
