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
      return 1;
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
      