// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  let strArr = s.split('');
  let arr_first = [];
  for(let a = 0; a < strArr.length; a++) {
    for(let b = a + 1; b < strArr.length; b++) {
      if(strArr[a] == strArr[b]) {
        if(arr_first.length < b) {
          arr_first = strArr.splice(a, b + 1);
        }
      }
    }
  }
  let output_str = arr_first.join('');
  return output_str;
};

console.log('Output is', longestPalindrome('babadaxcvzd'));