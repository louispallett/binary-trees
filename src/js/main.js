import '../scss/styles.scss';
import { removeDuplicates, sort } from './sorting';
import { findNode, removeNode } from "./functionality";

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

const insertNode = (root, value) => {
    root = insertRec(root, value)
    return root;
};

const insertRec = (root, value) => {
    if(root == null) {
        root = new Node(value);
        return root;
    }

    if(value < root.data) {
        root.left = insertRec(root.left, value)
    } else if (value > root.data) {
        root.right = insertRec(root.right, value)
    }
};

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

const testArray = [7, 2, 3, 5, 1, 6, 4, 8, 10, 9, 15, 11, 14, 12, 13]
const conciseArray = removeDuplicates(testArray);
const sortedArray = sort(conciseArray);
const tree = new Tree(sortedArray);
console.log(tree);
prettyPrint(tree.root);