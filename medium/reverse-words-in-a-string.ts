function reverseWords(s: string): string {
  let strArr: string[] = [];
  let tempWord: string = "";
  let res: string = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      tempWord += s[i];
    } else {
      if (tempWord.length) {
        strArr.push(tempWord);
      }
      tempWord = "";
    }
  }

  if (tempWord.length > 0) {
    strArr.push(tempWord);
  }

  for (let i = strArr.length - 1; i > 0; i--) {
    res += `${strArr[i]} `;
  }
  res += strArr[0];

  return res;
}

console.log(reverseWords("the sky is blue"));

console.log(reverseWords("  hello world  "));

console.log(reverseWords("a good   example"));
