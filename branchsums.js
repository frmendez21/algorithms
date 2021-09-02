class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root, sums=[], sum=0) {
  sum += root.value;
  if(!root.left && !root.right) {
      sums.push(sum);
  }
  if(root.left) branchSums(root.left, sums, sum);
  if(root.right) branchSums(root.right, sums, sum);
  return sums;
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
console.log(branchSums(root))