import { Node } from "./main";
export { insertNode, findNode, removeNode, levelOrder };

const insertNode = (root, value) => {
  return insertRec(root, value);
};

const insertRec = (root, value) => {
  if(root == null) {
    return new Node(value);
  }

  if(value < root.data) {
      root.left = insertRec(root.left, value)
  } else if (value > root.data) {
      root.right = insertRec(root.right, value)
  }

  return root;
};

const removeNode = (root, value) => {
  // Base case
  if(root === null) {
    return root;
  }

  if(root.data > value) {
    root.left = removeNode(root.left, value);
    return root;
  } else if (root.data < value) {
    root.right = removeNode(root.right, value);
    return root
  }

  // At this point, root == value
  // If one children is empty
  if(root.left === null) {
    let temp = root.right;
    delete root.data;
    return temp;
  } else if(root.right === null) {
    let temp = root.left;
    delete root.data;
    return temp;
  } 
  // Both children exist
  else {
    let succParent = root;
    let succ = root.right;
    while(succ.left !== null) {
      succParent = succ;
      succ = succ.left;
    }

    // Delete successor.  Since successor is always left child of its parent
    // we can safely make successor's right right child as left of its parent.
    // If there is no succ, then assign succ.right to succParent.right
    if(succParent !== root) {
      succParent.left = succ.right;
    } else {
      succParent.right = succ.right;
    }
    
    // Copy Successor Data to root
    root.data = succ.data;

    // Delete Successor and return root
    delete succ.data;
    return root;
  }
};

const findNode = (root, value) => {
  // Base case 
  if(root == null) {
    console.log("Not found :(");
    return null;
  }

  if(root.data == value) {
    console.log("Found :)");
    return root;
  }

  if(root.data > value) {
    root.left = findNode(root.left, value);
  } else if (root.data < value) {
    root.right = findNode(root.right, value);
  }

  return root;
};

const levelOrder = (root) => {
  /* Level-Order Traversal - we need to go through the nodes based on level (root level, then to
    it's children at level 1 and so on) - in other words, left to right and down.
    We need to do this by implementing a queue. */

    if(root === null) return [];
    const result = [];
    const queue = [root];

    while(queue.length !== 0) {
      let subqueue = [];
      const len = queue.length;

      for(let i = 0; i < len; i++) {
        let node = queue.pop();
        subqueue.push(node.data);

        if(node.left) {
          queue.unshift(node.left);
        }
        
        if(node.right) {
          queue.unshift(node.right);
        }
      }
      result.push(subqueue);
    }
    return result;
}