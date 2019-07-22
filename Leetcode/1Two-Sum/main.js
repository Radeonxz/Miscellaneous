// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let arr = [];
  for(let a = 0; a < nums.length; a++) {
    for(let b = a + 1; b < nums.length; b++) {
      if(nums[a] + nums[b] === target) {
        arr.push(a);
        arr.push(b);
      }
    }
  }
  return arr;
};

// const twoSum = (nums, target) => {
//   const comp = {};
//   for(let i=0; i<nums.length; i++){
//     if(comp[nums[i] ]>=0){
//       return [ comp[nums[i] ] , i]
//     }
//     comp[target-nums[i]] = i
//   }
// };

// const twoSum = (nums, target) => {
//   let hash_table = {};
//   for(let i = 0; i < nums.length; i++) {
//     hash_table[nums[i]] = i;
//   }
//   for(let i = 0; i < nums.length; i++) {
//     let diff = target - nums[i];
//     if(hash_table.hasOwnProperty(diff) && hash_table[diff] !== i) {
//       return [i, hash_table[diff]];
//     }
//   }
// };

console.log('Output is', twoSum([2, 7, 11, 15], 9));