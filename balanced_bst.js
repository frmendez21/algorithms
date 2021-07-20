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
        if(!this.root) {
            this.root = newNode;
        } else {
            if(val < root.value) {
                if(!root.left) {
                    root.left = newNode;
                } else {
                    this.insert(val, root.left)
                }
            } else {
                if(!root.right) {
                    root.right = newNode;
                } else {
                    this.insert(val, root.right)
                }
            }
        }

        return this;
    }

    isBalanced(root=this.root) {
    
        if(!root) return true;

        const findDepth = (currNode) => {
            if(!currNode) return 0;
            return Math.max(findDepth(currNode.left), findDepth(currNode.right)) + 1;
        };

        const left = findDepth(root.left);
        const right = findDepth(root.right);

        if(Math.abs(left - right) > 1) return false;

        if(root.left) return this.isBalanced(root.left)
        if(root.right) return this.isBalanced(root.right)
        return true;
    }
}

const bst = new BinarySearchTree();
// bst.insert(10)
// bst.insert(8)
// bst.insert(12)
// bst.insert(7)
// bst.insert(5)
// bst.insert(9)
// bst.insert(20)
// bst.insert(15)
// bst.insert(12)
// bst.insert(15)
// bst.insert(20)
// bst.insert(10)
// bst.insert(12)

// console.log(bst.isBalanced())
