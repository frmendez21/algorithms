class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}
class PriorityQueue {
    // priority queue w/ min binary heap
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        const newNode = new Node(value, priority);
        this.values.push(newNode)
        if(this.values.length > 1) this.bubbleUp(this.values.length - 1);
    }

    bubbleUp(idx) {
        const currNode = this.values[idx];
        const parentIdx = Math.floor((idx - 1) / 2);
        const parentNode = this.values[parentIdx];

        if(!parentNode) return;

        if(currNode.priority < parentNode.priority) {
            [this.values[parentIdx], this.values[idx]] = [this.values[idx], this.values[parentIdx]]
            this.bubbleUp(parentIdx);
        } 
    }

    dequeue() {
        if(!this.values.length) return;

        [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];

        const removed = this.values.pop();
        this.bubbleDown(0);
        return removed;
    };

    bubbleDown(idx) {
        const leftIdx = (2 * idx) + 1;
        const rightIdx = (2 * idx) + 2;
        const leftChild = this.values[leftIdx];
        const rightChild = this.values[rightIdx];
        const currNode = this.values[idx];
        let switchIdx; 

        if((leftChild && rightChild) && leftChild.priority < currNode.priority && rightChild.priority < currNode.priority) {
            switchIdx = leftChild.priority < rightChild.priority ? leftIdx : rightIdx;
        } else if(leftChild && leftChild.priority < currNode.priority) {
            switchIdx = leftIdx;
        } else if(rightChild && rightChild.priority < currNode.priority) {
            switchIdx = rightIdx;
        }
        if(switchIdx) {
            [this.values[idx], this.values[switchIdx]] = [this.values[switchIdx], this.values[idx]];
            this.bubbleDown(switchIdx);
        }
    }
}
