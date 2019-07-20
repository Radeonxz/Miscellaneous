/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const addTwoNumbers = (l1, l2) => {
  let result_list;
  let current_node;
  let carry = 0;
  let v1 = 0;
  let v2 = 0;
  
  const checkSum = sum => {
    if(parseInt(sum / 10) > 0) {
      carry = parseInt(sum / 10);
      sum = sum % 10;
    } else {
      carry = 0;
    }
    return sum;
  };
  
  const getValToNext = (list1, list2) => {
    v1 = list1 ? list1.val : 0;
    l1 = list1 ? list1.next : null;
    v2 = list2 ? list2.val : 0;
    l2 = list2 ? list2.next : null;
  };
  
  if(l1 || l2) {
    getValToNext(l1, l2);
    current_node = result_list = new ListNode(checkSum(v1 + v2));
    while(l1 || l2) {
      getValToNext(l1, l2);
      const sum = v1 + v2 + carry;
      current_node.next = new ListNode(checkSum(sum));
      current_node = current_node.next;
    }
    if(carry !== 0) {
      current_node.next = new ListNode(carry);
    }
  }
  return result_list;
};

console.log(addTwoNumbers({val: 2, next: {val: 4, next: {val: 3, next: null}}}, {val: 5, next: {val: 6, next: {val: 4, next: null}}}));