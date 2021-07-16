class Node {
    constructor(val) {
        this.value = val;
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        const newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const temp = this.last;
            this.last.next = temp;
            this.last = newNode;
            this.last.next = null;
        }
        return ++this.size;
    }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
// q.enqueue(3);
console.log(q.first.next)