class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
		const newNode = new BST(value);
		if(newNode.value < this.value) {
			if(!this.left) {
				this.left = newNode;
			} else {
				this.left.insert(value)
			}
		} 
		if(newNode.value >= this.value) {
			if(!this.right) {
				this.right = newNode;
			} else {
				this.right.insert(value);
			}
		}
    return this;
  }

  contains(value) {
		if(value < this.value) {
			if(!this.left) {
				return false;
			} else {
				return this.left.contains(value);
			}
		} else if(value > this.value) {
			if(!this.right) {
				return false;
			} else {
				return this.right.contains(value);
			}
		} else {
			return true;
		}
  }

  remove(value, parent=null) {
		if(value < this.value) {
			if(this.left) {
				this.left.remove(value, this);
			}
		} else if(value > this.value) {
			if(this.right) {
				this.right.remove(value, this);
			}
		} else {
			if(this.left && this.right) {
				this.value = this.right.getMin();
				this.right.remove(this.value, this);
			} else if(!parent) {
				if(this.left) {
					this.value = this.left.value;
					this.right = this.left.right;
					this.left = this.left.left;
				} else if(this.right) {
					this.value = this.right.value;
					this.left = this.right.left;
					this.right = this.right.right;
				}
			} else if(parent.left === this) {
				parent.left = this.left ? this.left : this.right;
			} else if(parent.right === this) {
				parent.right = this.left ? this.left : this.right;
			}
		}
		return this;
	}
	
	getMin() {
		if(!this.left) return this.value;
		return this.left.getMin()
	}
		
  }
 
	