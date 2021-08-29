const findClosestValueInBst = (tree, target, closest=Infinity) => {
    const dist = Math.abs(tree.value - target);
    const closestDist = Math.abs(closest - target);
    if(dist < closestDist) {
        closest = tree.value;
    }
    if(tree.right && tree.value < target) {
        return findClosestValueInBst(tree.right, target, closest);
    } else if(tree.left && tree.value > target) {
        return findClosestValueInBst(tree.left, target, closest)
    }
    return closest;
};

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
const root = new BST(10);
root.left = new BST(5);
root.right = new BST(15);
root.left.left = new BST(2);
root.left.right = new BST(5);
root.left.left.left = new BST(1);
root.right.left = new BST(13);
root.right.right = new BST(22);
root.right.left.right = new BST(15);
console.log(findClosestValueInBst(root, 12)) // 13

// input: bst and target int val
// output: closest val to target in bst