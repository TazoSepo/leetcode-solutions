function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;

  let freq1 = new Map<string, number>();

  for (let char of word1) {
    let charFreq = freq1.get(char);

    charFreq ? freq1.set(char, charFreq + 1) : freq1.set(char, 1);
  }

  let freq2 = new Map<string, number>();

  for (let char of word2) {
    if (!freq1.has(char)) return false;

    let charFreq = freq2.get(char);

    charFreq ? freq2.set(char, charFreq + 1) : freq2.set(char, 1);
  }

  let arr1 = [...freq1.values()].sort((a, b) => {
    return a - b;
  });

  let arr2 = [...freq2.values()].sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

console.log(closeStrings("abc", "bca"));

console.log(closeStrings("a", "aa"));

console.log(closeStrings("cabbba", "abbccc"));
