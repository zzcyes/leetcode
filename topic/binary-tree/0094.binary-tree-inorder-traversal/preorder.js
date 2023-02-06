const { TreeNode } = require("./../../../utils/node.js");
// const { TreeHelper } =  require("./../../../utils/help.js");

// var treeArray = [1,2,3,4,5,6,7,8,0,0,9]

// TreeHelper.printTree(treeArray)

// - 前序遍历：父节点->左子树->右子树
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
function preorder(root) {
  if (!root) return [];
  let res = [];
  const recursion = (tree) => {
    if (!tree) return null;
    const { val, left, right } = tree;
    res.push(val);
    left && recursion(left);
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

const results = preorder(tree);

console.log("results:", results);

module.exports = preorder;
