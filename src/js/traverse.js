export { levelOrder, inorder, preorder, postorder };

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
};

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

const preorder = (root, result = []) => {
    if(root === null) return;

    result.push(root.data);
    
    if(root.left) {
        preorder(root.left, result);
    }

    if(root.right) {
        preorder(root.right, result);
    }
    
    return result;
};

const postorder = (root, result = []) => {
    if(root === null) return;

    
    if(root.left) {
        preorder(root.left, result);
    }
    
    if(root.right) {
        preorder(root.right, result);
    }
    
    result.push(root.data);

    return result;
};