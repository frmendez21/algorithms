const treeBuilder = require('./tree_builder');


var sumNumbers = function(root) {
    let sum = 0;

    const traverse = (curr, inner='') => {
        if(!curr) return;
        inner += curr.val;

        if(!curr.left && !curr.right) {
            sum += Number(inner);
        }

        if(curr.left) traverse(curr.left, inner);
        if(curr.right) traverse(curr.right, inner);

    }

    traverse(root);
    return sum;
};

let root = treeBuilder([4,9,0,5,1], null, 0);
console.log(sumNumbers(root))
// Input: root = [1,2,3]
// Output: 25
// Explanation:
// The root-to-leaf path 1->2 represents the number 12.
// The root-to-leaf path 1->3 represents the number 13.
// Therefore, sum = 12 + 13 = 25.

