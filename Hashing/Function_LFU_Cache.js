class Node{
    constructor(key, value) {
        this.key = key;
        this.val = value;
        this.next = this.prev = null;
        this.freq = 1;
    }
}

class LRUDoublyLinkedList {
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
        node.prev.next = node.next;
        node.next.prev = node.prev;
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
    this.curSize = 0;
    this.minFreq = 0;
    this.nodeHash = new Map();
    this.freqHash = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {

    const foundNode = this.nodeHash.get(key)
    if(!foundNode) return -1;
    //% node need to be update intothe hashmap
    //% we will update the founded node into the our frequncyhashmap because while accessing frequncy will be changed will be added into the another doublly linked list
    this._updateFrequency(foundNode)
    return foundNode.val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if(this.maxCapacity == 0) return
    let foundNode = this.nodeHash.get(key)
    if(!foundNode) { //% Existing node
        this.curSize++;
        if(this.curSize > this.maxCapacity) {
           let tailKey = this.freqHash.get(this.minFreq)._removeTail()
           this.nodeHash.delete(tailKey);
           this.curSize--;
        }
        let newNode = new Node(key, value);
        if(this.freqHash.get(1) == null) this.freqHash.set(1, new LRUDoublyLinkedList())
        this.freqHash.get(1)._addFrontNode(newNode);
        this.nodeHash.set(key, newNode);
        this.minFreq = 1;
    } else { //% new node
        foundNode.val = value;
        this._updateFrequency(foundNode)
    }
};

LFUCache.prototype._updateFrequency = function(node) {
    //% Delete rhe node from the keyMap
    //% Remove the node from the FreqMap
    //% After removing if freqMap map is empty then node freq == minFrq and if it is empty 
    //% We will create next higher freq list so need to craete new DDL and find into the next freq if not then add into the new freqMap
    this.freqHash.get(node.freq)._removeNode(node)
    if(node.freq == this.minFreq && this.freqHash.get(node.freq)._isEmpty()) this.minFreq++
    node.freq++;
    if (this.freqHash.get(node.freq)==null)  this.freqHash.set(node.freq, new LRUDoublyLinkedList())
    this.freqHash.get(node.freq)._addFrontNode(node);
}


LFUCache.prototype.printAll = function() {
    for(let current  = this.nodeHash; current != null; current = current.next) {
        console.log(current)
    }
    for(let current  = this.freqHash; current != null; current = current.next) {
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
