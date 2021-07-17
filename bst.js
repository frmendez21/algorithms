class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val, root=this.root) {
        const newNode = new Node(val);
        if(!root) {
            this.root = newNode;
        } else {
            if(newNode.value > root.value) {
                if(!root.right) {
                    root.right = newNode;
                } else {
                    this.insert(val, root.right);
                }
            } else {
                if(!root.left) {
                    root.left = newNode;
                } else {
                    this.insert(val, root.left);
                }
            }
        }
        return this;
    }

    find(val, root=this.root) {
        if(!root) return;
        if(val === root.value) return root;

        if(val > root.value) {
            return this.find(val, root.right);
        } else {
            return this.find(val, root.left);
        }
    }

    breadthFirstSearch() {
        if(!this.root) return;
        const queue = [this.root];
        const result = [];
        while(queue.length) {
            const currNode = queue.shift();
            result.push(currNode.value);

            if(currNode.left) queue.push(currNode.left);
            if(currNode.right) queue.push(currNode.right);
        }
        return result;
    }

    DFSPreOrder(curr=this.root, res=[]) {
        res.push(curr.value)
        if(curr.left) this.DFSPreOrder(curr.left, res)
        if(curr.right) this.DFSPreOrder(curr.right, res)
        return res;
    }
 
    DFSPostOrder(curr=this.root, res=[]) {
        if(curr.left) this.DFSPostOrder(curr.left, res);
        if(curr.right) this.DFSPostOrder(curr.right, res);
        res.push(curr.value);
        return res;
    }

    DFSInOrder(curr=this.root, res=[]) {
        if(curr.left) this.DFSInOrder(curr.left, res);
        res.push(curr.value);
        if(curr.right) this.DFSInOrder(curr.right, res);
        return res;
    }
}

const bst = new BinarySearchTree();
bst.insert(15)
bst.insert(20)
bst.insert(10)
bst.insert(12)
bst.insert(1)
bst.insert(5)
bst.insert(50)
// console.log(bst.breadthFirstSearch()) // [15, 10, 20, 1, 12, 50, 5] 
/* 
         15
        /   \
      10     20
     /   \      \
    1     12     50
     \
      5
*/
console.log(bst.DFSPreOrder()) // [15, 10, 1, 5, 12, 20, 50]
console.log(bst.DFSPostOrder()) // [5, 1, 12, 10, 50, 20, 15]
console.log(bst.DFSInOrder()) // [1, 5, 10, 12, 15, 20, 50]
