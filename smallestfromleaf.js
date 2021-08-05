
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// For Testing

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

var smallestFromLeaf = function(root) {
    const alpha = ('abcdefghijklmnopqrstuvwxyz').split('');
    let res = [];

    const traverse = (curr, inner=[]) => {
        inner.push(alpha[curr.val]);
        if(!curr.left && !curr.right) {
            let lex = inner.reverse();
            res.push(lex.join(''))
        }
        if(curr.left) traverse(curr.left, inner.slice())
        if(curr.right) traverse(curr.right, inner.slice())
    }
    traverse(root);
    
    const lexSort = res.sort((a, b) => a.localeCompare(b));
    return lexSort[0]

};




let arr = [16,2,18,25,10,17,8,5,18,0,21,13,2,3,16,22,7,25,2,22,10,2,7,11,20,22,3,13,16,9,22,7,0,1,17,14,24,24,23,1,19,18,17,18,23,16,9,13,5,15,0,3,8,20,18,8,16,1,4,25,7,10,14]
let root = treeBuilder(arr, null, 0);

// let arr2 = [2,2,1,null,1,0,null,0]
// let root2 = treeBuilder(arr2, null, 0)

console.log(smallestFromLeaf(root)) // "aunrsq"