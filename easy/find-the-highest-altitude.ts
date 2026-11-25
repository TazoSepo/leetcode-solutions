function largestAltitude(gain: number[]): number {
  let maxGain: number = 0;
  let sum: number = 0;

  for (let i = 0; i < gain.length; i++) {
    sum = sum + gain[i];
    if (sum > maxGain) maxGain = sum;
  }

  return maxGain;
}

console.log(largestAltitude([-5, 1, 5, 0, -7]));

console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
