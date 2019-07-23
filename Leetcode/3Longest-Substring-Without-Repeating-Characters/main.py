# Given a string, find the length of the longest substring without repeating characters.

# Example 1:

# Input: "abcabcbb"
# Output: 3 
# Explanation: The answer is "abc", with the length of 3. 
# Example 2:

# Input: "bbbbb"
# Output: 1
# Explanation: The answer is "b", with the length of 1.
# Example 3:

# Input: "pwwkew"
# Output: 3
# Explanation: The answer is "wke", with the length of 3. 
# Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

class Solution:
  def lengthOfLongestSubstring(self, s):
    """
    :type s: str
    :rtype: int
    """
    left = 0
    right = 0
    output = 0
    characters = set()
    while left < len(s) and right < len(s):
      if s[right] in characters:
        if s[left] in characters:
          characters.remove(s[left])
        left += 1
      else:
        characters.add(s[right])
        right += 1
        output = max(output, len(characters))
    return output

  # def lengthOfLongestSubstring(self, s):
  #   left = 0
  #   right = 0
  #   output = 0
  #   characters = dict()
  #   for right in range(len(s)):
  #     if s[right] in characters:
  #       left = max(left, characters[s[right]] + 1)
  #     characters[s[right]] = right
  #     output = max(output, right - left + 1)
  #   return output
    
print('Output is', Solution().lengthOfLongestSubstring('abcabcbb'))