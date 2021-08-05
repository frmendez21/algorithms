const treeBuilder = require('./tree_builder');

var pathSum = function(root, targetSum) {
    const paths = [];
    
    const traverse = (curr, inner=[]) => {
        if(!curr) return;
        inner.push(curr.val);
        
        if(!curr.left && !curr.right) {
            const sum = inner.reduce((acc, curr) => acc + curr, 0);
            if(sum === targetSum) paths.push(inner);
        }

        if(curr.left) traverse(curr.left, inner.slice());
        if(curr.right) traverse(curr.right, inner.slice());
    }

    traverse(root);
    return paths;
};

const root = treeBuilder([5,4,8,11,null,13,4,7,2,null,null,5,1], null, 0);
console.log(root)
// console.log(pathSum(root, 22));