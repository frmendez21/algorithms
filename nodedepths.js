const nodeDepths = (root) => {
    let sum = 0;
    let depth = 0; 
    let stack = [{'node': root, depth: depth}];
    while(stack.length) {
        let curr = stack.pop();
        let {node, depth} = curr;
        if(!node) continue;
        sum += depth;
        stack.push({'node': node.left, 'depth': depth + 1})
        stack.push({'node': node.right, 'depth': depth + 1})
    }
    return sum;
};

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.left.left.left = new BinaryTree(8);
root.left.left.right = new BinaryTree(9);
// root.left.right.left = new BinaryTree(10);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);

console.log(nodeDepths(root))