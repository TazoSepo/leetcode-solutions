# Intuition

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

<!-- Describe your approach to solving the problem. -->

# Complexity

- Time complexity:
  <!-- Add your time complexity here, e.g. $$O(n)$$ -->

  O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```javascript []
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
function isEqualToTarget(resultArray, target) {
  return (
    resultArray.length === target.length &&
    target.every((value, index) => value === resultArray[index])
  );
}

var buildArray = function (target, n) {
  let result = [];
  let resultArray = [];

  for (let i = 1; i <= n; i++) {
    resultArray.push(i);
    result.push("Push");
    if (!target.includes(i)) {
      resultArray.pop(i);
      result.push("Pop");
    }

    if (isEqualToTarget(resultArray, target)) {
      return result;
    }
  }
};
```
