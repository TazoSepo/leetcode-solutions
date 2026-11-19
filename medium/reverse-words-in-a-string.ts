function reverseWords(s: string): string {
  let strArr: string[] = [];
  let tempWord: string = "";
  let res = "";

  for (let i = 0; i <= s.length; i++) {
    if (isNumberOrString(s[i])) {
      tempWord += s[i];
    } else {
      if (tempWord.length) {
        strArr.push(tempWord);
      }
      tempWord = "";
    }
  }

  for (let i = strArr.length - 1; i > 0; i--) {
    res += `${strArr[i]} `;
  }
  res += strArr[0];

  return res;
}

function isNumberOrString(char: string): boolean {
  return (
    (char >= "A" && char <= "Z") ||
    (char >= "a" && char <= "z") ||
    (char >= "0" && char <= "9")
  );
}

console.log(reverseWords("the sky is blue"));

console.log(reverseWords("  hello world  "));

console.log(reverseWords("a good   example"));
