/**
 * Given the head of a singly linked list, return the middle node of the linked list.
 *  If there are two middle nodes, return the second middle node.
 *  Input: head = [1,2,3,4,5]
 *  Output: [3,4,5]
 *  Explanation: The middle node of the list is node 3.
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

class List {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    printAll(node) {
        for(let current = node; current != null; current = current.next) {
            console.log(current)
        }
    }

    middleNode(head) {
        let slow = head;
        let fast = head;
        //% While loop exicute till null found in fast i.e fast reach at end
        while(fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next
        }
        return slow
    }
}

let list = new ListNode(1)
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4)
list.next.next.next.next = new ListNode(5)

let list2 = new List();
let output = list2.middleNode(list)
list2.printAll(output)