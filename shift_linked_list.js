// This is the class of the input linked list.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function shiftLinkedList(head, k) {
  // Write your code here.
	if(k === 0) return head;
	const oldHead = head;
	const size = findSize(head, k);
	if(size === 0) return head;
	const [newHead, newTail] = findNewHead(head, size);
	if(!newTail) return newHead;
	newTail.next = null;
	
	let curr = newHead;
	while(curr.next) {
		curr = curr.next;
	}
	curr.next = oldHead;
	return newHead
}

function findSize(head, k) {
	if(k === 0) return head;
	let size = 0; 
	let oldTail = head;
	while(oldTail) {
		size++;
		oldTail = oldTail.next;
	}

	let kABS = Math.abs(k);
	if(k > 0 && kABS > size) {
		return findSize(head, kABS - size)
	} else if(k < 0 && kABS < size) {
		return kABS;
	} else if (k < 0 && kABS > size) {
		return findSize(head, k + size)
	} else {
		return (size - kABS)
	}
	
}

function findNewHead(head, idx) {
	let newHead = head;
	let newTail = head;
	while(idx > 0) {
		newTail = newHead;
		newHead = newHead.next;
		idx--;
	}
	return [newHead, newTail]
}