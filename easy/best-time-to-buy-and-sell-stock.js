/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let win = 0;
  let l = 0;
  let r = 0;
  while (l < prices.length) {
    if (prices[l] >= prices[l + 1]) l++;
    r = l + 1;
    while (prices[l] < prices[r]) {
      if (prices[r] - prices[l] > win) {
        win = prices[r] - prices[l];
      }
      r++;
    }
    l = r;
  }

  return win;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

console.log(maxProfit([7, 6, 4, 3, 1]));

console.log(maxProfit([7, 6, 4, 3, 1, 21, 41, 41, 22]));

console.log(maxProfit([2, 4, 1]));

console.log(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9]));
