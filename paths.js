var binaryTreePaths = function(root) {
    if(root == null) return root;
    let array = [];
    
    function traverse(node, innerRes=[]){
        if(!node) return [];
        // str += node.val;
        innerRes.push(node.val)
        if(!node.left && !node.right) {
            array.push(innerRes.slice());
            return;
        }
        // str += '->'
        node.left && traverse(node.left, innerRes.slice());
        node.right && traverse(node.right, innerRes.slice());
    }
    
    
    traverse(root);
    return array
};
