class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}

class SinglyLinkedList{
    
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(val){
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
        return this;
    }
    pop() {
         if(!this.head) return;
         const node = this.tail;
         const prev = this.findPrev();
         prev.next = null;
         this.tail = prev;
         this.length --;
         if(this.length === 0) {
             this.head = null;
             this.tail = null;
         }
         return node;
    }

    findPrev() {
        let curr = this.head;
        let prev = curr;
        while(curr.next) {
            prev = curr;
            curr = curr.next;
        }
        return prev;
    }

    shift() {
        if(!this.head) return;
        const head = this.head;
        this.head = this.head.next;
        this.length --;
        if(this.length === 0) this.tail = null;
        return head;
    }

    unshift(val) {
        if(!this.head) {
            this.push(val)
            return this;
        };

        const newHead = new Node(val);
        const oldHead = this.head;
        this.head = newHead;
        this.head.next = oldHead;
        this.length ++;
        return this;
    }

    get(idx, curr=this.head) {
        if( curr && idx === 0 ) return curr;
        if(Math.abs(idx) > this.length - 1) return null;
        if(idx > 0) return this.get(idx - 1, curr.next)
        if(idx < 0) return this.get((this.length - 1) + idx, curr.next)
    }

    set(idx, val){
        // change val of node at idx with val
        if(idx < 0 || idx > this.length - 1) return false;
        let curr = this.head;
        while(idx > 0) {
            curr = curr.next;
            idx--;
        }
        curr.val = val;
        return true;
    }

    insert(idx, val){
        // insert new node at idx
        if(idx < 0 || idx > this.length) return false;
        else if(idx === 0) this.unshift(val);
        else if(idx === this.length) this.push(val);
        else {
            const newNode = new Node(val);
            let prevNode = this.get(idx - 1);
            newNode.next = prevNode.next;
            prevNode.next = newNode;
            this.length ++;
        }
        return true;
    }

    rotate(n) {
        // rotate sll by n rotations 
        // 1 - 2 - 3 - 4 - 5 => rotate(2) => 3 - 4 - 5 - 1 - 2
        // 1 - 2 - 3 - 4 - 5 => rotate(-1) => 5 - 1 - 2 - 3 - 4

        if( n > Math.abs(this.length) || n === 0) return;

        const newHead = this.get(n);
        const newTail = this.get(n - 1);

        const oldHead = this.head;
        const oldTail = this.tail;

        if(n > 0) {
            this.head = newHead;
            oldTail.next = oldHead;
            newTail.next = null;
            this.tail = newTail;  
        } else {
            newHead.next = this.head;
            this.head = newHead;
            newTail.next = null;
            this.tail = newTail;
        }
    }

    remove(idx) {
        // remove node at idx and sub length
        if(Math.abs(idx) > this.length) return;

        const prevNode = this.get(idx - 1);
        const currNode = prevNode.next;

        if(!currNode.next && prevNode) {
            prevNode.next = null;
            this.tail = prevNode;
        } else if(!prevNode && currNode) {
            this.head = currNode.next
        } else {
            prevNode.next = currNode.next;
        }
        this.length --;
        return currNode;
    }
    reverse() {
        const newTail = this.head;
        let prev = this.head;
        let currNode = this.head.next;
        let next;

        while(currNode) {
            next = currNode.next;
            currNode.next = prev;
            prev = currNode;
            currNode = next;
        }

        this.head = this.tail;
        this.tail = newTail;
        this.tail.next = null;
        return this;
    }
}

let sll = new SinglyLinkedList();
sll.push(1)
sll.push(2)
sll.push(3)
sll.push(4)
// sll.push(5)
// sll.rotate(-1)
// sll.rotate(2)
// sll.remove(2)
console.log(sll.reverse())
// let l = sll.length;
// let i = 0; 
// while(l > 0) {
//     console.log(sll.get(i));
//     i++
//     l--;
// }
// console.log(sll)