class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;  
        this.size = 0;
    }
    push(val){
        // take in a node and push to top of stack
        const newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop() {
        if(!this.first) return;
        const removed = this.first;
        if(this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.size --;
        return removed;
    }
}
const stk = new Stack();
stk.push(1)
stk.push(2)
stk.push(3)
stk.pop()
stk.pop()
stk.pop()
console.log(stk)