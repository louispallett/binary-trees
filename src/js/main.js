import '../scss/styles.scss';
import { removeDuplicates, sort } from './sorting';
import { findNode, insertNode, removeNode } from "./functionality";
import { levelOrder, inorder, preorder, postorder } from './traverse';
import { heightOfNode, depth, isBalanced, rebalance } from './attributes';

export { Node, Tree };

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
}

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

// Tests
const testArray = [55, 12, 88, 12, 45, 4, 5, 7, 88, 97, 94, 66, 523, 1, 123, 71, 49];
const conciseArray = removeDuplicates(testArray);
const sortedArray = sort(conciseArray);
console.log(sortedArray);
let tree = new Tree(sortedArray);
prettyPrint(tree.root);


insertNode(tree.root, -1);
insertNode(tree.root, 64);
prettyPrint(tree.root);

removeNode(tree.root, 4);
prettyPrint(tree.root);

console.log(tree.root);


findNode(tree.root, -55);
findNode(tree.root, -1);

prettyPrint(tree.root);

findNode(tree.root, 7);

prettyPrint(tree.root);

console.log(levelOrder(tree.root));
console.log(inorder(tree.root));
console.log(preorder(tree.root));
console.log(postorder(tree.root));

// removeNode(tree.root, -1);
removeNode(tree.root, 64);
console.log("Height of 7: " + heightOfNode(tree.root, 7));
prettyPrint(tree.root);

console.log(isBalanced(tree.root));

tree = rebalance(tree.root);
prettyPrint(tree.root);

removeNode(tree.root, 71);
insertNode(tree.root, 600);
prettyPrint(tree.root);
console.log(isBalanced(tree.root));
tree = rebalance(tree.root);
prettyPrint(tree.root);