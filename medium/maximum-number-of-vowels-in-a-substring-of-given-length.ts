function maxVowels(s: string, k: number): number {
  let maxCount: number = 0;

  for (let i = 0; i < k; i++) {
    if (isVowel(s[i])) {
      maxCount++;
    }
  }

  let count = maxCount;

  for (let i = k; i < s.length; i++) {
    if (isVowel(s[i - k])) count--;
    if (isVowel(s[i])) count++;

    if (count > maxCount) maxCount = count;
  }

  return maxCount;
}

function isVowel(char: string) {
  return ["a", "e", "i", "o", "u"].includes(char);
}

console.log(maxVowels("abciiidef", 3));

console.log(maxVowels("aeiou", 2));

console.log(maxVowels("leetcode", 3));

console.log(maxVowels("o", 1));

console.log(maxVowels("k", 1));

console.log(maxVowels("kkkkkkkkkkk", 5));

console.log(maxVowels("aeiuouiioaaaaaeee", 17));
