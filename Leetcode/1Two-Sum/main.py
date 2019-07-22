# Given an array of integers, return indices of the two numbers such that they add up to a specific target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# Example:

# Given nums = [2, 7, 11, 15], target = 9,

# Because nums[0] + nums[1] = 2 + 7 = 9,
# return [0, 1].

class Solution:
  def twoSum(self, nums, target):
    output = []
    a = 0
    for numberA in nums:
      b = 0
      for numberB in nums:
        if numberA + numberB == target:
          output.append(a)
          output.append(b)
          return output
        b += 1
      a += 1

  # def twoSum(self, nums, target):
  #   for i in range(len(nums)):
  #     left = nums[i+1:]
  #     for j in range(len(left)):
  #       if (nums[i] + left[j]) == target:
  #         return i, j+i+1

  # def twoSum(self, nums, target):
  #   k = 0
  #   for i in nums:
  #     k += 1
  #     if target - i in nums[k:]:
  #       return(k - 1, nums[k:].index(target - i) + k)

  # def twoSum(self, nums, target):
  #   hash_table = {}
  #   for i in range(len(nums)):
  #     hash_table[nums[i]] = i
  #   for i in range(len(nums)):
  #     if target - nums[i] in hash_table:
  #       if hash_table[target - nums[i]] != i:
  #         return [i, hash_table[target - nums[i]]]s  
  #   return []

print('Output is', Solution().twoSum([2, 7, 11, 15], 9))