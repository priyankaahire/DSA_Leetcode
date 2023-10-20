class Node{
    constructor(key, value) {
        this.key = key;
        this.val = value;
        this.next = this.prev = null;
        this.freq = 1;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = new Node(null,null);
        this.tail = new Node(null,null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    _addFrontNode(node) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
    }

    _removeNode(node) {
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    _removeTail() {
        let node = this.tail.prev;
        this._removeNode(node);
        return node.key;
    }

    _isEmpty() {
        return this.head.next.val == null;
    }
}

/**
 * @param {number} maxCapacity
 */
var LFUCache = function(maxCapacity) {
    this.maxCapacity = maxCapacity;
    this.currentSize = 0;
    this.minFreq = 0;
    this.nodeHash = new Map();
    this.freqHash = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    let foundNode = this.nodeHash.get(key);
    if (!foundNode) return -1;
    this.freqHash.get(foundNode.freq)._removeNode(foundNode);
    if (foundNode.freq==this.minFreq && this.freqHash.get(foundNode.freq)._isEmpty()) this.minFreq++
    foundNode.freq++;
    // freqHash housekeeping
    if (this.freqHash.get(foundNode.freq)==null) this.freqHash.set(foundNode.freq, new DoublyLinkedList())
    this.freqHash.get(foundNode.freq)._addFrontNode(foundNode);
    return foundNode.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if (this.maxCapacity == 0) return;
    let foundNode = this.nodeHash.get(key);
    if (!foundNode) { // new node
        this.currentSize++;
        if (this.currentSize > this.maxCapacity) {
            let tailKey = this.freqHash.get(this.minFreq)._removeTail();
            this.nodeHash.delete(tailKey);
            this.currentSize--;
        }
        let newNode = new Node(key, value);
        // freqHash housekeeping
        if (this.freqHash.get(1)==null) this.freqHash.set(1, new DoublyLinkedList())
        this.freqHash.get(1)._addFrontNode(newNode);

        this.nodeHash.set(key, newNode);
        this.minFreq = 1;

    } else { // existed node
        foundNode.val = value;
        this.freqHash.get(foundNode.freq)._removeNode(foundNode);
        if (foundNode.freq == this.minFreq && this.freqHash.get(foundNode.freq)._isEmpty()) this.minFreq++;
        foundNode.freq++;
        // freqHash housekeeping
        if (this.freqHash.get(foundNode.freq)==null) this.freqHash.set(foundNode.freq, new DoublyLinkedList())
        this.freqHash.get(foundNode.freq)._addFrontNode(foundNode);
    }
};

LFUCache.prototype.printAll = function() {
    for(let current  = this.head; current != null; current = current.next) {
        console.log(current)
    }
}
let lfu = new LFUCache(2);
lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
lfu.printAll();
lfu.get(1);      // return 1
                 // cache=[1,2], cnt(2)=1, cnt(1)=2
lfu.put(3, 3);   // 2 is the LFU key because cnt(2)=1 is the smallest, invalidate 2.
                 // cache=[3,1], cnt(3)=1, cnt(1)=2
lfu.get(2);      // return -1 (not found)
lfu.get(3);      // return 3
                 // cache=[3,1], cnt(3)=2, cnt(1)=2
lfu.put(4, 4);   // Both 1 and 3 have the same cnt, but 1 is LRU, invalidate 1.
                 // cache=[4,3], cnt(4)=1, cnt(3)=2
lfu.get(1);      // return -1 (not found)
lfu.get(3);      // return 3
                 // cache=[3,4], cnt(4)=1, cnt(3)=3
lfu.get(4);      // return 4
                // cache=[4,3], cnt(4)=2, cnt(3)=3