const treeBuilder = (arr, root, i) => {
    if (i < arr.length) {
        let temp = new TreeNode(arr[i]);
        root = temp;
        root.left = treeBuilder(arr, root.left,
                                            2 * i + 1);
        root.right = treeBuilder(arr, root.right,
                                            2 * i + 2);
    }
    return root;
}

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
module.exports = treeBuilder;

