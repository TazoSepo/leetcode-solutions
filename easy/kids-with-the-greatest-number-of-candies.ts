function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let result: boolean[] = [];
  let maxCandies: number = candies[0];

  for (let i = 1; i < candies.length; i++) {
    if (candies[i] > maxCandies) {
      maxCandies = candies[i];
    }
  }

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandies) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));

console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));

console.log(kidsWithCandies([12, 1, 12], 10));
