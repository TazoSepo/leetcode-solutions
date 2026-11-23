function maxArea(height: number[]): number {
  let maxArea = 0;
  let i = 0,
    j = height.length - 1;

  while (i < j) {
    let minHeight = Math.min(height[i], height[j]);

    let area = minHeight * (j - i);

    if (area > maxArea) maxArea = area;

    height[i] < height[j] ? i++ : j--;
  }

  return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([1, 0]));

console.log(maxArea([1, 0, 211, 1, 2141, 4122, 1431]));
