function encode(strs: string[]): string {
  // Has to be stored somewhere private
  const shift = 5;
  let str = strs.join();
  let encodedStr = "";
  for (const char of str) {
    encodedStr += String.fromCharCode(char.charCodeAt(0) + shift);
  }

  return encodedStr;
}

/**
 * @param {string} str
 * @returns {string[]}
 */
function decode(str: string): string[] {
  const shift = 5;
  let decodedStr = "";
  for (const char of str) {
    decodedStr += String.fromCharCode(char.charCodeAt(0) - shift);
  }

  return decodedStr.split(",");
}

console.log(encode(["Hello", "World"]));
console.log(decode("Mjqqt1\\twqi"));
