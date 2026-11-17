function mergeAlternately(word1: string, word2: string): string {
  let res: string = "";
  let maxLength: number = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) {
      res += word1[i];
    }
    if (i < word2.length) {
      res += word2[i];
    }
  }
  return res;
}

console.log(mergeAlternately("abc", "pqr"));

console.log(mergeAlternately("ab", "pqrs"));

console.log(mergeAlternately("abcd", "pq"));
