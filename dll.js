class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail.next.prev = this.tail;
            this.tail = newNode;
        }
        this.length ++;
        return this;
    }

    pop() {
        if(!this.head) return;
        const oldTail = this.tail;
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
        this.length --;
        return oldTail;
    }
    shift() {
        if(!this.head) return;
        const oldHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head.next.prev = null;
            this.head = this.head.next;
        }
        this.length --;
        return oldHead;
    }

    unshift(val) {
        if(!this.head) {
            return this.push(val);
        }
        const newNode = new Node(val);
        const oldHead = this.head;
        this.head = newNode;
        this.head.next = oldHead;
        this.head.next.prev = this.head;
        this.length ++;
        return this;
    }

    get(idx) {
        // if idx <= mid start from head else start from tail
        const mid = Math.floor(this.length / 2)
        if(idx < 0 || idx > this.length - 1) return null;
        if(idx === 0) {
            return this.head;
        } else if(idx === this.length - 1) {
            return this.tail;
        } else {
            let curr;
            if(idx <= mid) {
                curr = this.head;
                for(let i = 0; i <= mid; i++) {
                    if(i === idx) return curr;
                    curr = curr.next;
                }
            } else if(idx > mid) {
                curr = this.tail;
                for(let i = this.length - 1; i > mid; i--) {
                    if(i === idx) return curr;
                }
            }
        }
    }
    set(idx, val) {
        // update node at idx with val, return true if update, false if invalid idx
        const node = this.get(idx);
        if(!node) return false
        node.val = val;
        return true
    }
    remove(idx) {
        const node = this.get(idx);
        if(!node) return;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else if(!node.prev){
            this.head = node.next;
            this.head.prev = null;
        } else if(!node.next) {
            this.tail = node.prev;
            this.tail.next = null;
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }

        this.length --;
        return node;
    }

    insert(idx, val) {
        const newNode = new Node(val);
        if(idx === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else if (idx === this.length - 1) {
            newNode.next = this.tail;
            this.tail.prev.next = newNode;
            this.tail.prev = newNode;
        } else {
            const currNode = this.get(idx);
            if(!currNode) return false;
            currNode.prev.next = newNode;
            newNode.next = currNode;
            newNode.prev = currNode.prev;
            currNode.prev = newNode;
        }
        this.length ++;
        return true;
    }
    reverse() {
        const newTail = this.head;
        const newTailPrev = this.head.next;

        let prevNode = this.head;
        let currNode = prevNode.next;
        let nextNode;
        while(currNode) {
            nextNode = currNode.next;
            currNode.next = prevNode;
            currNode.prev = nextNode;
            prevNode = currNode;
            currNode = nextNode;
        }
        this.head = prevNode;
        this.tail = newTail;
        this.tail.prev = newTailPrev;
        this.tail.next = null;
        return this;

    }
}

const dll = new DoublyLinkedList();

dll.push(5)
dll.push(10)
dll.push(15)
dll.push(20)

console.log(dll.get(3))