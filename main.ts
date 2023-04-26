class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;
    return left.val === right.val && isMirror(left.left, right.right) &&
        isMirror(left.right, right.left);
}

function isSymmetric(root: TreeNode | null): boolean {
    if (root === null) return true;
    return isMirror(root.left, root.right);
}
if (import.meta.main) {
    const Tree = new TreeNode(
        1,
        new TreeNode(2, new TreeNode(3), new TreeNode(4)),
        new TreeNode(2, new TreeNode(4), new TreeNode(3)),
    );
    console.log(isSymmetric(Tree));
}
