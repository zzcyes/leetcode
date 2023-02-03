const { TreeNode } = require("./../../../utils/node.js");

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//  中序遍历：左子树->父节点->右子树
var inorderTraversal = function (root) {
  if (!root) return [];
  let stack = [root];
  let res = [];
  while (stack.length) {
    const { val, left, right } = stack.pop();
    if (right) {
      stack.push(right);
    }
    res.push(val);
    if (left) {
      stack.push(left);
    }
  }
  return res;
};

// 3
// / \
// 9  20
// /  \
// 15   7

// [
//   [3],
//   [9,20],
//   [15,7]
// ]

const tree = new TreeNode(1);
tree.right = new TreeNode(2);
tree.right.left = new TreeNode(3);

console.log(tree);

console.log(inorderTraversal(tree));
