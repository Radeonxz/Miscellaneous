# There are two sorted arrays nums1 and nums2 of size m and n respectively.

# Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

# You may assume nums1 and nums2 cannot be both empty.

# Example 1:

# nums1 = [1, 3]
# nums2 = [2]

# The median is 2.0
# Example 2:

# nums1 = [1, 2]
# nums2 = [3, 4]

# The median is (2 + 3)/2 = 2.5

class Solution:
  def findMedianSortedArrays(self, nums1, nums2):
    """
    :type nums1: List[int]
    :type nums2: List[int]
    :rtype: float
    """
    i = 0
    j = 0
    numList = []
    output = -1
    while i < len(nums1) and j < len(nums2):
      if(nums1[i] < nums2[j]):
        numList.append(nums1[i])
        i += 1
      else:
        numList.append(nums2[j])
        j += 1
    if(i == len(nums1)):
      numList.extend(nums2[j:])
    else:
      numList.extend(nums1[i:])
    print('numList is', numList)
    if(len(numList) % 2 == 1):
      output = numList[len(numList / 2)]
    else:
      output = (numList[int(len(numList) / 2)] + numList[int(len(numList) / 2 - 1)]) / 2
    print('type is', type(output))
    return output

print('Output is', Solution().findMedianSortedArrays([1, 2], [3, 4]))