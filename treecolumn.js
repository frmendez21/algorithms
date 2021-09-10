
class node{
  constructor(val, left, right){
    this.val = val;
    this.left = (left ? left: null); 
    this.right = (right? right: null); 
  }
}

const createTree = (nums) => {

  let root = new node(nums[0]); 

  let queue = [root]; 

  let i = 1; 
  while (i<nums.length){
    let left = new node(nums[i]); 
    let right = new node(nums[i+1]); 
    let first = queue.shift(); 
    first.left = left; 
    first.right = right; 
    queue.push(left); 
    queue.push(right); 

    i+=2
  }

  console.log(root);
  return root; 
}

const printTree = (node) => {
  console.log("current:", node.val);
  if(node.left){
    console.log("left: ", node.left.val); 
  }
  if(node.right){
    console.log("right: ", node.right.val); 
  }

  console.log(""); 
  if(!node.left && !node.right){
    return; 
  }

  if(node.left){
    printTree(node.left);
  }
  if(node.right){
    printTree(node.right); 
  }
}

const columnPrint = root => {
  let result = []; 

  //hash stores the values of the nodes in each column
  //the key is the column number
  //the value is an array of nodes
  let data = {}; 

  //using the queue to traverse the binary tree in a breadth first manner
  let queue = [root];

  //using a queue that runs parallel to the main queue to store the column 
  //each position in this column queue corresponds to the node at the same position in the main queue
  let columnQueue = [0]; 


  //while there are still elements in the queue 
  while(queue.length){

    //remove the first node from the queue for processing!
    //also remove the first column number from our column queue
    let first = queue.shift(); 
    let column = columnQueue.shift();

    //save the node into the hash using the column as the key-
    //and an array to store the node values 
    if(data[column]){
      data[column].push(first.val); 
    }
    else{
      data[column] = [first.val];
    }

    //get both the left and right children of the current element 
    //also get what the column should be by subtracting one or adding one to the current nodes column.
    let left = first.left; 
    let right = first.right; 

    let leftColumn = column-1; 
    let rightColumn = column+1; 


    //if the child of the current node is not null or undefined 
    //add it to the back of the queue and also add it's column 
    //to the back of the columnQueue
    if(left && left.val){
      queue.push(left); 
      columnQueue.push(leftColumn); 
    }

    if(right && right.val){
      queue.push(right); 
      columnQueue.push(rightColumn); 
    }
  } 

  //now that all the data has been stored into the hash object
  //sort the keys ascending
  //save each array stored in the data object into the result array
  //this should make sure that the data is printed in column 
  let keys = Object.keys(data); 
  keys.sort( (a,b) => a-b); 
  for(let i = 0; i<keys.length; i++){
    result = result.concat(data[keys[i]]); 
  }

}

let root = createTree([1,2,5,3,4,null,6]); 
// printTree(root); 
columnPrint(root); 



// ------------MY CODE ---------------------------

class node{
  constructor(val, left, right){
    this.val = val;
    this.left = (left ? left: null); 
    this.right = (right? right: null); 
  }
}

const createTree = (nums) => {

  let root = new node(nums[0]); 

  let queue = [root]; 

  let i = 1; 
  while (i<nums.length){
    let left = new node(nums[i]); 
    let right = new node(nums[i+1]); 
    let first = queue.shift(); 
    first.left = left; 
    first.right = right; 
    queue.push(left); 
    queue.push(right); 

    i+=2
  }

  // console.log(root);
  return root; 
}

const printTree = (node) => {
  console.log("current:", node.val);
  if(node.left){
    console.log("left: ", node.left.val); 
  }
  if(node.right){
    console.log("right: ", node.right.val); 
  }

  console.log(""); 
  if(!node.left && !node.right){
    return; 
  }

  if(node.left){
    printTree(node.left);
  }
  if(node.right){
    printTree(node.right); 
  }
}



const columnPrint = (root) => {
 
    const hash = {};
    hash[0] = [root.val];
  const traverse = (root, idx) => {
    let queue = [[root, idx]];
    while(queue.length) {
      const [curr, currIdx] = queue.shift();
      if(!((currIdx - 1) in hash) && curr.left) {
        hash[currIdx - 1] = [curr.left.val];
      } else if(curr.left){
        hash[currIdx - 1].push(curr.left.val);
      }
      if(!((currIdx + 1) in hash) && curr.right) {
        hash[currIdx + 1] = [curr.right.val]
      } else if(curr.right){
        hash[currIdx + 1].push(curr.right.val);
      }
      if(curr.left) queue.push([curr.left, currIdx - 1]);
      if(curr.right) queue.push([curr.right, currIdx + 1]);
    }

  }
  traverse(root, 0);
  let keys = Object.keys(hash).sort((a, b) => Number(a) - Number(b))
  const result = [];
  for(let i = 0; i < keys.length; i++) {
    result.push(...hash[keys[i]])
  }
  return result;
}
//    
// input : 
//. -2. -1  0  1.  2
//.         1 
        //2.   5 
    // 3.   4.    6 

// {0: [1, 4]}
// initiliaze a hash, keys will be column numbers, value will be array of values tht belong to that column
// initalize a index that starts at 0 
// if we go left subtract index, right add index 
// 
//return [3,2,1,4,5,6]

let root = createTree([1,2,5,3,4,null,6]); 
// printTree(root); 
console.log(columnPrint(root)); 