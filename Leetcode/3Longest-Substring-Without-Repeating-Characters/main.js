// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  let strArr = s.split('');
  let arr_first = [];
  let arr_second = [];
  let duplicate_flag = false;
  for(let i = 0; i < strArr.length; i++) {
    if(arr_first.includes(strArr[i]) || duplicate_flag == true) {
      duplicate_flag = true;
      if(arr_second.includes(strArr[i])) {
        if(arr_first.length > arr_second.length) {
          arr_second = [];
        } else {
          duplicate_flag = false;
          arr_first = [];
        }
      }
      arr_second.push(strArr[i])
    } else {
      arr_first.push(strArr[i]);
    }
  }
  let final_arr = arr_first.length > arr_second.length ? arr_first : arr_second;
  let output_str = final_arr.join('');
  return output_str;
};

console.log('Output is', lengthOfLongestSubstring('strinabcstsrisnasbcs'));