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

// const twoSum = function(nums, target) {
//   const comp = {};
//   for(let i=0; i<nums.length; i++){
//     if(comp[nums[i] ]>=0){
//       return [ comp[nums[i] ] , i]
//     }
//     comp[target-nums[i]] = i
//   }
// };

console.log(twoSum([2, 7, 11, 15], 9));