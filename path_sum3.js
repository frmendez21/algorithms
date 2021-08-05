// Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

// The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).
const treeBuilder = require('./tree_builder');

var pathSum = function(root, targetSum) {
    let total = 0;
    const traverse = (node, sum = 0, cache={0:1}) => {
        if(!node) return;

        sum += node.val;
        
        const cacheSum = sum - targetSum;

        if(cache[cacheSum]) total += cache[cacheSum];

        if(cache[sum]) {
            cache[sum] = cache[sum] + 1;
        } else {
            cache[sum] = 1;
        }

        traverse(node.left, sum, cache);
        traverse(node.right, sum, cache);
        cache[sum] -= 1;
    }

    traverse(root)
    return total;
};

const root = treeBuilder([10,5,-3,3,2,null,11,3,-2,null,1], null, 0);
const root2 = treeBuilder([5,4,8,11,null,13,4,7,2,null,null,5,1], null, 0);
console.log(pathSum(root, 8));
// console.log(pathSum(root2, 22));
// Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
// Output: 3
// Explanation: The paths that sum to 8 are shown.