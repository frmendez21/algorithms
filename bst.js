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
}

const bst = new BinarySearchTree();
bst.insert(15)
bst.insert(20)
bst.insert(10)
bst.insert(12)
console.log(bst.find(20))
// console.log(bst)