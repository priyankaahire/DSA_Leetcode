class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }

}

class List {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(value) {
        const spot = new Node(value);
        if(this.head == null)
            this.head = spot;
        else
            this.tail.next = spot
        this.tail = spot;

    }

    merged(value) {
        console.log(h1)
        console.log(h2)
    }

    print() {
        for(let current = this.head; current != null; current = current.next)
            console.log(current.value)
    }
}
// let o = new List();
// o.add(1)
// o.add(2)
// o.add(3)
// o.add(4)
// o.add(1)
// o.add(4)
// o.print();
// console.log(o)


let o = new List();
head1 = o.add(1)
head1.next = o.add(2)
head1.next.next = o.add(3)

head2 = o.add(4)
head2.next = o.add(1)
head2.next.next = o.add(4)


c = o.merged(head1, head2);
// o.print(c)



