export { height, depth, isBalanced, rebalance };

const height = (root) => {
    if(root === null) return 0;

    let lDepth = height(root.left);
    let rDepth = height(root.right);
    
    if(lDepth > rDepth) {
        return (lDepth + 1);
    } else {
        return (rDepth + 1);
    }
};

const depth = (root) => {

};

const isBalanced = (root) => {

};

const rebalance = (root) => {

};