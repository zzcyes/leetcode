const { TreeNode } = require("./../../../utils/node.js");

// 层次遍历

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
// 层次遍历
var levelOrder = function (root) {
  if (!root) return [];
  let stack = [];
  let res = [];
  let level = 0;
  stack.push(root);
  while (stack.length) {
    res.push([]);
    let size = stack.length;
    while(size--){
      const { val, left, right } = stack.shift();
      res[level].push(val);
      left && stack.push(left);
      right && stack.push(right);
    }
    level++;
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

const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.left.left = new TreeNode(15);

tree.right = new TreeNode(20);
tree.right.right = new TreeNode(7);

console.log(tree);

console.log(levelOrder(tree));