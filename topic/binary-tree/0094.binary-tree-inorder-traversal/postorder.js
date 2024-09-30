const { TreeNode } = require("./../../../utils/node.js");
// const { TreeHelper } =  require("./../../../utils/help.js");

// var treeArray = [1,2,3,4,5,6,7,8,0,0,9]

// TreeHelper.printTree(treeArray)

// - 后序遍历：左子树->右子树->父节点
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
function postorder(root) {
  if (!root) return [];
  let res = [];
  const recursion = (tree) => {
    if (!tree) return null;
    const { val, left, right } = tree;
    left && recursion(left);
    right && recursion(right);
    res.push(val);
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

const results = postorder(tree);

console.log("results:", results);

// - 后序遍历：左子树->右子树->父节点
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 迭代
// 1. 先遍历到左子叶节点，此时退栈，res 记录节点
// 2. 此时 root= root.next 再遍历右子叶节点, 此时退栈, res 记录节点
// 2. res 记录节点, 退栈
function postorderIteration(root) {
  if (!root) return [];
  let stack = [];
  let res = [];
  let prev = null;
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    // 遍历到子叶节点，退栈
    root = stack.pop();
    // 当右节点不存在，或者右节点等于上一个节点（？），记录值
    // prev更换为当前root
    // root 置为null
    if (root.right === null || root.right === prev) {
      res.push(root.val);
      prev = root;
      root = null;
    } else {
      // 存在右节点或者 root.right 不等于 prev 时，继续进栈并遍历右子树
      stack.push(root);
      root = root.right;
    }
  }
  return res;
}

// 左 -> 右 -> 父
// 父 -> 右 -> 左 再反转
function postorderIteration1(root) {
  if (!root) return [];
  let stack = [root];
  let res = [];
  while (stack.length) {
    let curr = stack.pop();
    if (curr) {
      stack.push(curr.left);
      stack.push(curr.right);
      res.push(curr.val);
    }
  }
  return res.reverse();
}

const results1 = postorderIteration1(tree);

console.log("postorderIteration-results:", results1);

module.exports = postorder;
