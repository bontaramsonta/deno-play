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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums.length === 0) {
        return null;
    }
    const mid = Math.floor(nums.length / 2);
    console.log(mid, nums.slice(0, mid), nums.slice(mid + 1));
    const node = new TreeNode(
        nums[mid],
        sortedArrayToBST(nums.slice(0, mid)),
        sortedArrayToBST(nums.slice(mid + 1)),
    );
    return node;
}

if (import.meta.main) {
    // const arr = [-10, -3, 0, 5, 9];
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const tree = sortedArrayToBST(arr);
    console.log(tree);
}
