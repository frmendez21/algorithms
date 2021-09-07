// Write your code here.
// initialize an array of same length fill with Infinity
// set first to 0
// iterate through array from 1 w/ inner loops from 0 to i
// check if the elements before i (j) and j itself sum to be 
// greater than i, if they are that means you can jump there, then set jumps[i] to the min of jumps[i] or jumps[j] + 1;
function minNumberOfJumps(array) {
	const jump = new Array(array.length).fill(Infinity);
	jump[0] = 0;
	for(let i = 1; i < array.length; i++) {
		for(let j = 0; j < i; j++) {
			if(array[j] + j >= i) {
				jump[i] = Math.min(jump[i], jump[j] + 1);
			}
		}
	}
	return jump[jump.length - 1]
}

// init three variables, jump=0, maxReach=firstEl, steps = firstEl
// iterate from 1 to end and update maxReach to max(maxReach, array[i] + i)
// decrement steps 
// when steps is 0, increment jump and set steps to maxReach - current Index;
// at the end return jump + 1
function minNumberOfJumps(array) {
  // Write your code here.
	if(array.length <= 1) return 0;
	let maxReach = array[0];
	let currSteps = array[0];
	let jump = 0; 
	for(let i = 1; i < array.length - 1; i++) {
		maxReach = Math.max(maxReach, array[i] + i);
		currSteps --;
		if(currSteps === 0) {
			jump ++;
			currSteps = maxReach - i;
		}
	}
	return jump + 1;
}