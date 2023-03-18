import { assertEquals } from 'https://deno.land/std@0.178.0/testing/asserts.ts';
// Definition for a binary tree node.
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p == null || q == null) return p == q;
    if (p.val !== q.val) return false;
    if (isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) return true;
    else return false;
}

if (import.meta.main) {
    const first = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const second = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const result = isSameTree(first, second);
    console.log(result);
    assertEquals(result, true);
}
