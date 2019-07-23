# You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

# You may assume the two numbers do not contain any leading zero, except the number 0 itself.

# Example:

# Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
# Output: 7 -> 0 -> 8
# Explanation: 342 + 465 = 807.

# Definition for singly-linked list.
class ListNode:
  def __init__(self, x):
    self.val = x
    self.next = None

class Solution:
  def addTwoNumbers(self, l1, l2):
    l3 = l1
    while l1 != None or l2 != None:
      sum = l1.val + l2.val
      l1.val = sum % 10

      if sum >= 10:
        if l1.next != None:
          l1.next.val = l1.next.val + 1

          if l1.next.val >= 10 and l2.next == None:
            l2.next = ListNode(0)
        else:
          l1.next = ListNode(1)

      else:
        if l1.next == None and l2.next != None:
          l1.next = ListNode(0)

      if l2.next == None:
        break

      l1 = l1.next
      l2 = l2.next
    return l3

print('Output is', Solution().addTwoNumbers())