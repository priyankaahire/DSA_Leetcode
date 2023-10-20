/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 * 
 * 
 */

 // Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
 
var reverseList = function(head) {
    let currentNode = head;
    let dummyNode = null;  //% Create one dummyNode with null value
    let nextNode = null;
    //% Iteration till received null value
    while(currentNode) {
        nextNode =  currentNode.next;
        currentNode.next = dummyNode;
        dummyNode = currentNode;
        currentNode = nextNode
    }
    return dummyNode
}

reverseList()