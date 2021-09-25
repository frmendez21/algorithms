function invertBinaryTree(tree) {
  // Write your code here.
	const traverse = root => {
		const queue = [root];
		while(queue.length) {
			const currNode = queue.shift();
			if(currNode.left && currNode.right) {
				let left = currNode.left;
				currNode.left = currNode.right;
				currNode.right = left;
				queue.push(currNode.left, currNode.right);
			} else if(currNode.left) {
				currNode.right = currNode.left;
				currNode.left = null;
				queue.push(currNode.right);
			} else if(currNode.right) {
				currNode.left = currNode.right;
				currNode.right = null;
				queue.push(currNode.left);
			} 
			
		}
	}
	return traverse(tree)
	
	
}