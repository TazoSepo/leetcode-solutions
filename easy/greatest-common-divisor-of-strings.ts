function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  let num = gcd(str1.length, str2.length);

  return str1.slice(0, num);
}

function gcd(a: number, b: number): number {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }

  return Math.abs(a);
}

console.log(gcdOfStrings("ABCABC", "ABC"));

console.log(gcdOfStrings("ABABAB", "ABAB"));

console.log(gcdOfStrings("AAAAAB", "AAA"));
