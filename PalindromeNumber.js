// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.
// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

var isPalindrome = function (x) {
  let v = x;
  let temp = 0;
  while (v > 0) {
    let a = v % 10;
    v = parseInt(v / 10);
    temp = temp * 10 + a;
  }
  if (temp === x) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));
