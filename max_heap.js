class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp(this.values.length - 1)
    }

    bubbleUp(idx) {
        const parentIdx = this.findParent(idx);
        if(parentIdx < 0) return;

        if(this.values[parentIdx] < this.values[idx]) {
            const temp = this.values[parentIdx];
            this.values[parentIdx] = this.values[idx];
            this.values[idx] = temp;
            this.bubbleUp(parentIdx)
        } 
    }

    findParent(idx) {
        return Math.floor((idx - 1) / 2)
    };

    extractMax() {
        this.values[0] = this.values[this.values.length - 1];
        this.values.pop();
        this.bubbleDown(0)
    }

    bubbleDown(idx) {
        const left = Math.floor((2 * idx) + 1)
        const right = Math.floor((2 * idx) + 2)
        let temp;

        if(this.values[idx] < this.values[left] && this.values[idx] < this.values[right]) {
            const greatest = this.values[left] > this.values[right] ? left : right;
            temp = this.values[greatest];
            this.values[greatest] = this.values[idx];
            this.values[idx] = temp;
            this.bubbleDown(greatest)
        } else if(this.values[idx] < this.values[left]) {
            temp = this.values[left];
            this.values[left] = this.values[idx];
            this.values[idx] = temp;
            this.bubbleDown(left)
        } else if (this.values[idx] < this.values[right]) {
            temp = this.values[right];
            this.values[right] = this.values[idx];
            this.values[idx] = temp;
            this.bubbleDown(right)
        }
    }
}

const heap = new MaxBinaryHeap();
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)

heap.extractMax()
console.log(heap)