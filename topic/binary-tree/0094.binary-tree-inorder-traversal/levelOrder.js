const { TreeNode } = require("./../../../utils/node.js");
// 层次遍历
// “广度优先搜索遍历类似于树的按层次遍历的过程”
// 广度/宽度优先搜索（Breadth First Search，简称BFS）
// 从根节点开始，沿着树的宽度遍历树的节点，直到所有节点都被遍历完为止。
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

// NOTE: level 是层级，size 是每层的宽度
function levelOrder(root) {
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

module.exports = levelOrder;