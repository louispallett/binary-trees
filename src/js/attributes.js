export { heightOfNode, depth, isBalanced, rebalance };

let heightCounter = -1;

const heightOfNode = (root, value) => {
    heightRec(root, value);
    return heightCounter;
};

const heightRec = (root, value) => {
    if(root === null) return -1;

    let leftHeight = heightRec(root.left, value);
    let rightHeight = heightRec(root.right, value);

    let result = Math.max(leftHeight, rightHeight) + 1;

    if(root.data == value) {
        heightCounter = result;
    }

    return result;
}

const depth = (root, value) => {
    if(root == null) return -1;

    let counter = -1;
    if((root.data == value) || (counter = depth(root.left, value)) >= 0 || (counter = depth(root.right, value)) >= 0) {
        return counter + 1;
    }
    return counter;
};

const depthOfTree = (root) => {
    if(root === null) return 0;

    let lDepth = depthOfTree(root.left);
    let rDepth = depthOfTree(root.right);

    if(lDepth > rDepth) {
        return lDepth + 1;
    } else {
        return rDepth + 1;
    }
}

const isBalanced = (root) => {
    const lDepth = depthOfTree(root.left);
    const rDepth = depthOfTree(root.right);

    return (lDepth == rDepth)? true : false;
};

const rebalance = (root) => {

};