/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 * 
 * 
 */

//! TC: O(N) (tocalculate the length) + O(N) (to reach a node) = o(2n)
//%Appraoch: ex 4th is the 2nd node from the back
//% if n == node length in that case assign
    //% deletenode = head
    //% head = head->next
    //% delete deleteNode


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
class List {
    constructor() {
        this.head = null;
        this.tail = null
    }
    printAll(list) {
        for(let current = list; current != null; current = current.next) {
            console.log(current)
        }
    }
    removeNthFromEnd(head, n) {
        let len = 0;
        let dummy = head
        //% While loop to exicute to find the length of head
        while(dummy != null){
            len++;
            dummy = dummy.next
        }
        //% Finding delte node index
        let nodeIndex = len - n + 1;
        let prev = null;
        let temp = head;
        for(let i=1; i < nodeIndex; i++) {
            prev = temp
            temp = temp.next
        }
        if(prev == null) head = head.next
        else prev.next = prev.next.next
        return head
    }
}

let list = new ListNode(1)
list.next = new ListNode(2)
list.next.next = new ListNode(3)
list.next.next.next = new ListNode(4)
list.next.next.next.next = new ListNode(5)
list.next.next.next.next.next = new ListNode(6)
let list2 = new List()
let v = list2.removeNthFromEnd(list, 3)
list2.printAll(v)