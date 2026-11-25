function largestAltitude(gain: number[]): number {
  let prefixSum = [0];

  for (let i = 0; i < gain.length; i++) {
    let sum = prefixSum[i] + gain[i];
    prefixSum.push(sum);
  }

  let maxGain = prefixSum[0];

  for (let i = 1; i < prefixSum.length; i++) {
    if (prefixSum[i] > maxGain) maxGain = prefixSum[i];
  }

  return maxGain;
}

console.log(largestAltitude([-5, 1, 5, 0, -7]));

console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
