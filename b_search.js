function binarySearch(array, target) {
  // Write your code here.
	if(!array.length) return -1;
	let mid = Math.floor(array.length / 2);
	if(array[mid] === target) {
		return mid;
	} else if(array[mid] > target) {
		return binarySearch(array.slice(0, mid), target);
	} else {
		const res = binarySearch(array.slice(mid + 1), target);
		return res === -1 ? -1 : res + mid + 1;
	}
}
