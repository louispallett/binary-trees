import { Node } from "./main";
export { insertNode, findNode, removeNode };

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
  /*Pseudo code
  
  Get the first node - if equal, remove (somehow).
  If not, loop through the left. 
  If equal, remove.
  If not, loop through the right. 
  If equal, remove.
  return "Not found" else. 
  
  If we delete a LEAF, there is nothing to be done except the above, so we need to check if
  nodeNext == null first!
  If we delete a node which has ONE child, we can simply replace it with it's child (any grand children
    don't matter). In this case, the nodeNext == the grandchild.
    Third case: if we remove something which has two children, we need to find the NEXT BIGGEST. To do this,
    we need to look in the right subtree and then the following left subtrees (i.e., this should be something
      closest to the value +1 (if not value +1 itself)). So
      If value to delete = 70, then we need to find the child (or grandchild or great grand child and so on) which is
      closest to 71 or 71 itself. 
      71 (or the closest number) replaces 75.*/

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

    // Delete successor.  Since successor
    // is always left child of its parent
    // we can safely make successor's right
    // right child as left of its parent.
    // If there is no succ, then assign
    // succ.right to succParent.right
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
  /*Pseudo code

  Get the first node - if equal, return true.
    If not, loop through the left. 
      If equal, return true.
    If not, loop through the right. 
      If equal, return true.
  Else return false. */
};
      