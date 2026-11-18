function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if (n === 0) {
    return true;
  }
  if (flowerbed.length === 1) {
    return flowerbed[0] === 0;
  }

  for (let i = 0; i < flowerbed.length; i++) {
    if (isPlantable(flowerbed[i], flowerbed[i - 1], flowerbed[i + 1])) {
      flowerbed[i] = 1;
      n--;
    }
    if (n === 0) {
      return true;
    }
  }

  return false;
}

function isPlantable(target: number, left?: number, right?: number): boolean {
  if (target === 1) return false;
  if (left === undefined) return right === 0;
  if (right === undefined) return left === 0;
  return left === 0 && right === 0;
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));

console.log(canPlaceFlowers([1], 0));
