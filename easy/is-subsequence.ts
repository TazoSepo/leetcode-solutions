function isSubsequence(s: string, t: string): boolean {
  if (s.length > t.length) return false;
  if (!s.length) return true;

  let i: number = 0;

  for (let j = 0; j < t.length; j++) {
    if (t[j] === s[i]) i++;
    if (i > s.length - 1) return true;
  }

  return false;
}

console.log(isSubsequence("abc", "ahbgdc"));

console.log(isSubsequence("axc", "ahbgdc"));

console.log(isSubsequence("", ""));
