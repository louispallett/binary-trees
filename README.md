# binary-trees
#### _Course of [The Odin Project](https://www.theodinproject.com/lessons/javascript-binary-search-trees)_

A [Binary Tree](https://www.geeksforgeeks.org/binary-tree-data-structure/) is a data structure in which each piece of data (or node) has no more than one child. It allows for storage of data where the certain search algorithms can be implemented with more effecient time complexity (i.e. non-linear).

A [Balanced Binary Tree](https://www.geeksforgeeks.org/balanced-binary-tree/) is a binary tree where the height of the two sides of the tree differs by no more than one:

```txt
Balanced
       3
     /   \
    2     6
   /     / \
  1     4   5
 /
0

Unbalanced
       3
     /   \
    2     6
   /
  1     
 /
0
```

## Purpose

This programme tests and builds upon my knowledge of data structures, search algorithms, and recursion. These are listed below:

### MergeSort

The programme executes a merge sort algorithm to sort the initial data (O(n log n) time complexity):

```js
const sort = (array) => {
    if(array.length < 2) {
      return array;
    } else {
      const mid = Math.floor(array.length/2);
      const lefthand = array.slice(0, mid);
      const righthand = array.slice(mid, array.length);
  
      return merge(sort(lefthand), sort(righthand));
    }
}
  
const merge = (left, right) => {
    let i = 0;
    let j = 0;
    
    const result = [];
  
    for(; i < left.length && j < right.length;) {
        if(left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
  
    while(i < left.length) {
        result.push(left[i]);
        i++;
    }
  
    while(j < right.length) {
        result.push(right[j]);
        j++;
    }
  
    return result;
}
```

### Level Order Traversal (Breadth-First Search)

In order to traverse the tree, the programme uses the four types of traversal: level-order, in-order, pre-order, post-order. All can be found in the traverse.js file - an example is the level-order:

```js
const levelOrder = (root) => {  
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
};
```

### Rebalancing
If the tree is not balanced, it can be rebalanced using the rebalance() funciton in attributes.js - this relies on an in-order traversal function found in traverse.js:

```js
const inorder = (root, result = []) => {
    if(root === null) return;
    
    if(root.left) {
        inorder(root.left, result);
    }

    result.push(root.data);

    if(root.right) {
        inorder(root.right, result);
    }

    return result;
};
```

```js
const isBalanced = (root) => {
    const lDepth = depthOfTree(root.left);
    const rDepth = depthOfTree(root.right);

    return (lDepth == rDepth)? true : false;
};

const rebalance = (root) => {
    if(isBalanced(root)) return "Already Balanced";

    const newArray = inorder(root);
    return new Tree(newArray);
};
```

## Installation

If you want to try out this programme for yourself locally, you can download the files from the src directory. You'll then want to open the main.js file in a text editor and run your own tests - there are some already from line 52 in main.js:

```js
// Tests
const testArray = [55, 12, 88, 12, 45, 4, 5, 7, 88, 97, 94, 66, 523, 1, 123, 71, 49];
const conciseArray = removeDuplicates(testArray);
const sortedArray = sort(conciseArray);
console.log(sortedArray);
let tree = new Tree(sortedArray);
prettyPrint(tree.root);

// ... more tests
```

I suggest using [Quokka](https://quokkajs.com/docs/index.html) to get the output - you can do this on VS Code by running in the command pallet (ctrl + p):

```txt
>Quokka.js: Start on current file
```
