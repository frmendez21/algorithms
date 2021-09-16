class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findNodesDistanceK(tree, target, k) {
    // Write your code here.
    // find the target first and then find the nodes
    // that are k distance from target
    const targetNode = findTarget(tree, target);
    const parents = mapParents(tree, null, {});

    const queue = [[targetNode, 0]];
    const seen = new Set();
    while (queue.length) {
        const currTuple = queue.shift();
        const currNode = currTuple[0];
        const distance = currTuple[1];
        const parentNode = parents[currNode.value];
        if (distance === k) {
            queue.push([currNode, distance])
            break;
        }
        seen.add(currNode.value);
        if (currNode.right && !(seen.has(currNode.right.value))) queue.push([currNode.right, distance + 1]);
        if (currNode.left && !(seen.has(currNode.left.value))) queue.push([currNode.left, distance + 1]);
        if (parentNode && !(seen.has(parentNode.value))) queue.push([parentNode, distance + 1])
    }
    return queue.map(tuple => tuple[0].value)
}

function mapParents(root, parent, parents) {
    if (!root) return;
    parents[root.value] = parent;
    mapParents(root.left, root, parents);
    mapParents(root.right, root, parents);
    return parents;
}

function findTarget(root, target) {
    const queue = [root];
    while (queue.length) {
        const curr = queue.shift();
        if (curr.value === target) return curr;
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
    }
}
