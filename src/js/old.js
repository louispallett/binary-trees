class Node {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.array = array;
    this.root = this.buildTree(this.array, 0, this.array.length - 1);
  }

  buildTree(array, start, end) {
    // Base case:
    if(start > end) {
      return null;
    }
    
    const mid = parseInt((start + end) / 2);
  
    let node = new Node(array[mid]);
    node.left = this.buildTree(array, start, mid - 1);
    node.right = this.buildTree(array, mid + 1, end);
  
    return node;
  }

  insertNode(value) {
    /* Pseudo code
    
      Pass the value through the nodes of root
        If value > node, go right
        Else if < node, go left
        
        (base case)
        If node == null
          Replace null with value
  
        also, if node == value, just break and return 1; (we don't insert duplicates!)
    When we insert a new number in the tree, it is ALWAYS a leaf (i.e. at the last level)*/

    this.root = this.insertRec(this.root, value);
    return this.root;
  }

  insertRec(root, value) {
    // Base case: if we reach the end of the tree and find null, we replace null with the new value
    if(root == null) {
      root = new Node(value);
      return root;
    }
    console.log(root.data)
    // Otherwise, recurse down the tree
    if(value < root.data) {
      root.left = this.insertRec(root.left, value)
    } else if (value > root.data) {
      root.right = this.insertRec(root.right, value)
    }
  }
}

const removeDuplicates = (array) => {
  const uniqueValues = {};
  const result = [];

  for(const item of array) {
    if(!uniqueValues[item]) {
      result.push(item);
      uniqueValues[item] = true;
    }
  }
  return result;
}

const sort = (array) => {
  if(array.length < 2) {
    return array;
  } else {
    const mid = Math.floor(array.length/2);
    const lefthand = array.slice(0, mid);
    const righthand = array.slice(mid, array.length);

    // Return the merge function once sort() has completed for both left and right arrays. This will divide
    // each array until array.length < 2, then returning each individual array. Then, it will merge those returned
    // arrays
    return merge(sort(lefthand), sort(righthand));
  }
}

const merge = (left, right) => {
  // Define array indexes
  let i = 0;
  let j = 0;
  
  // Define the resulting array for elements to be pushed into
  const result = [];

  // Initial for loop for when both arrays NOT empty
  for(; i < left.length && j < right.length;) {
      if(left[i] < right[j]) {
          result.push(left[i]);
          i++;
      } else {
          result.push(right[j]);
          j++;
      }
  }

  // Remaining while loops when one array is empty but the other is NOT empty
  while(i < left.length) {
      result.push(left[i]);
      i++;
  }

  while(j < right.length) {
      result.push(right[j]);
      j++;
  }

  // Finally, return array
  return result;
}

// For printing the tree - do not touch!
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

// NOTE: Before you implement the following functions be sure to look at the links in the instructions (point 4)!



// Rather than putting the removeDuplicates() and sort() functions in the buildTree function, I am calling it outside
// of the buildTree function, so it doesn't recursively call removeDuplicates() and sort() whilst it builds the tree, which
// would increase the time complexity dramatically.
// const testArray = [22, 55, 13, 53, 66, 63, 55, 1, 23, 13, 66, 9, 1, 8, 66];
const testArray = [7, 2, 3, 5, 1, 6, 4, 8, 10, 9, 15, 11, 14, 12, 13]
const conciseArray = removeDuplicates(testArray);
const sortedArray = sort(conciseArray);
console.log(sortedArray);
const tree = new Tree(sortedArray);
prettyPrint(tree.root);