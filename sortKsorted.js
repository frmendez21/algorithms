function sortKSortedArray(array, k) {
  // Write your code here.
  let sortedIdx = 0;
	const minHeap = new MinHeap();
	for(let i = 0; i < Math.min(k + 1, array.length); i++) {
		minHeap.insert(array[i]);
	}
	for(let i = k + 1; i < array.length; i++) {
		array[sortedIdx] = minHeap.remove();
		sortedIdx ++;
		minHeap.insert(array[i]);
	}
	while(minHeap.values.length) {
		array[sortedIdx] = minHeap.remove();
		sortedIdx ++;
	}
	return array;
}

class MinHeap {
	constructor() {
		this.values = [];
	}
	
	insert(val) {
		this.values.push(val);
		if(this.values.length > 1) {
			this.bubbleUp(this.values.length - 1);
		}
	}
	bubbleUp(currIdx) {
		const pIdx = Math.floor((currIdx - 1) / 2);
		if(!this.values[pIdx]) return;
		if(this.values[pIdx] > this.values[currIdx]) {
			[this.values[currIdx], this.values[pIdx]] = [this.values[pIdx], this.values[currIdx]]
			this.bubbleUp(pIdx);
		}
	}
	remove() {
		let old;
		if(this.values.length > 1) {
			[this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
			old = this.values.pop();
		} else {
			old = this.values.pop();
		}
		this.bubbleDown(0);
		return old;
	}
	bubbleDown(currIdx) {
		const left = Math.floor((2 * currIdx) + 1);
		const right = left + 1;
		let smallest;
		if(this.values[left] && this.values[right] && this.values[currIdx] > this.values[left] && this.values[currIdx] > this.values[right]) {
			smallest = this.values[left] < this.values[right] ? left : right;
		} else if(this.values[left] && this.values[left] < this.values[currIdx]) {
			smallest = left;
		} else if(this.values[right] && this.values[right] < this.values[currIdx]) {
			smallest = right;
		}
		if(smallest) {
			[this.values[currIdx], this.values[smallest]] = [this.values[smallest], this.values[currIdx]];
			this.bubbleDown(smallest);
		}
	}
}
