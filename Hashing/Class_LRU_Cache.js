class Node {
    constructor(key, value) {
        this.prev = null;
        this.value = value;
        this.key = key
        this.next = null
    }
}

class LRUCache {
    map = new Map()
    constructor(capacity) {
        //! Dummy head and tail
        this.head = new Node(0, 0)
        this.tail = new Node(0, 0)

        this.head.next = this.tail
        this.tail.prev =  this.head
        this.capacity = capacity;
    }
    //% Serach Node
    searchNode(key, value) {
        for(let current = this.head.next; current != this.tail; current= current.next) {
            if(current.key == key) {
                return current
            }
        }
        return null;
    }
    //% Provide node to be add  
    addNode(node) {
       //~* Set node as value
        this.map.set(node.key, node)
        node.next = this.head.next;
        node.next.prev = node;
        this.head.next = node;
        node.prev = this.head

        return true
    }

    //% Provide address    
    deleteNode(node) {
        this.map.delete(node.key)
        //% Delete node prev node and delete node next node put into the temp value
        //$ deletenode.next  = full node
        node.prev.next =  node.next;
        node.next.prev =  node.prev;

        return true
    }

    //% get the required node
    get(key) {
        if(this.map.has(key)) {
            const foundnode = this.map.get(key)
            //! Serac node is required if you stored value as node into the set
            // this.searchNode(key, this.map.has(key))
            this.deleteNode(foundnode)
            this.addNode(foundnode)
            return foundnode.value;
        } else {
            return -1;
        }
        
    }
    //% put the required node 
    put(key, value) {
        if(this.map.has(key)) {
            const foundnode = this.map.get(key)
            //! this.searchNode(key, this.map.has(key))
            this.deleteNode(foundnode)
        }
        if(this.map.size == this.capacity) {
            this.deleteNode(this.tail.prev)
        }
        this.addNode(new Node(key, value))
    }

    printAll() {
        for(let current  = this.head; current != null; current = current.next) {
            console.log(current)
        }
    }
}

// var obj = new LRUCache(2)
// var param_1 = obj.get(1)
// obj.put(3,24)
// obj.printAll()

let lRUCache = new LRUCache(2);
lRUCache.put(1, 10); // cache is {1=1}
lRUCache.put(2, 20); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4

lRUCache.printAll()