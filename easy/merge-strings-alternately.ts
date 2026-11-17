function mergeAlternately(word1: string, word2: string): string {
  let i: number = 0;
  let j: number = 0;
  let res: string = "";

  while (i < word1.length || j < word2.length) {
    if (word1[i]) {
      res += word1[i];
      i++;
    }
    if (word2[j]) {
      res += word2[j];
      j++;
    }
  }

  return res;
}

console.log(mergeAlternately("abc", "pqr"));

console.log(mergeAlternately("ab", "pqrs"));

console.log(mergeAlternately("abcd", "pq"));
