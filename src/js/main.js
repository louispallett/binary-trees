import '../scss/styles.scss';
import { removeDuplicates, sort } from './sorting';
import { findNode, insertNode, removeNode } from "./functionality";

export { Node };

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

// const testArray = [7, 2, 3, 5, 1, 6, 4, 8, 10, 9, 15, 11, 14, 12, 13]
// const conciseArray = removeDuplicates(testArray);
// const sortedArray = sort(conciseArray);
// const tree = new Tree(sortedArray);
// console.log(tree);
// prettyPrint(tree.root);

// insertNode(tree.root, -1);
// prettyPrint(tree.root);

const testArray = [55, 12, 88, 12, 45, 4, 5, 7, 88, 97, 94, 66, 523, 1, 123, 71, 49];
const conciseArray = removeDuplicates(testArray);
const sortedArray = sort(conciseArray);
console.log(sortedArray);
const tree = new Tree(sortedArray);
prettyPrint(tree.root);


insertNode(tree.root, -1);
insertNode(tree.root, 64);
prettyPrint(tree.root);

removeNode(tree.root, 4);
prettyPrint(tree.root);

findNode(tree.root, 55);
findNode(tree.root, -55);
findNode(tree.root, 94);
findNode(tree.root, 4);

// prettyPrint(tree.root);