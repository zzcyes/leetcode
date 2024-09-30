const { TreeNode } = require("./../../../utils/node.js");
// const { TreeHelper } =  require("./../../../utils/help.js");

// var treeArray = [1,2,3,4,5,6,7,8,0,0,9]

// TreeHelper.printTree(treeArray)

// - 中序遍历：左子树->父节点->右子树
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
function inorder(root) {
  if (!root) return [];
  let res = [];
  const recursion = (tree) => {
    if (!tree) return null;
    const { val, left, right } = tree;
    left && recursion(left);
    res.push(val);
    right && recursion(right);
  };
  recursion(root);
  return res;
}

//    3
//   / \
//  9  20
//    /  \
//   15   7

// [9,3,15,20,7]

const tree = new TreeNode(3);
tree.left = new TreeNode(9);

tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

console.log(tree);

const results = inorder(tree);

console.log("results:", results);

// const tree1 = new TreeNode(1);

// tree1.right = new TreeNode(2);
// tree1.right.left = new TreeNode(3);

// console.log(tree1);

// const results1 = inorder(tree1);

// console.log("results1:", results1);

// - 中序遍历：左子树->父节点->右子树

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 迭代
// 1. 遍历左节点, 同时把当前 root 记录到 stack
// 2. res 记录节点, 退栈
// 3. 遍历右节点
function inorderIteration(root) {
  if (!root) return [];
  let stack = [];
  let res = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    // 出栈
    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
}

const results1 = inorderIteration(tree);

console.log("inorderIteration-results:", results1);

module.exports = inorder;
