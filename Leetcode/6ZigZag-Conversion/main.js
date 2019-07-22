// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  let output = '';
  let increment = numRows * 2 - 2;
  for(let i = 0; i < s.length; i += increment) {
    output += s.charAt(i);
  }

  for(let i = 1; i < numRows - 1; i++) {
    let temp_increment = 2 * i;
    for(let j = i; j < s.length; j += temp_increment) {
      output += s.charAt(j);
      temp_increment = increment - temp_increment;
    }
  }

  for(let i = numRows -1; i < s.length; i += increment) {
    output += s.charAt(i);
  }
  return output;
};

console.log('Output is', convert('PAYPALISHIRING', 5));