## 概念

- 深度优先搜索（Depth First Searc，简称DFS）

>“深度优先搜索遍历类似于树的先根遍历，是树的先根遍历的推广”

其过程简要来说是对每一个可能的分支路径深入到不能再深入为止，而且每个节点只能访问一次。


- 广度/宽度优先搜索（Breadth First Search，简称BFS）

>“广度优先搜索遍历类似于树的按层次遍历的过程”

从根节点开始，沿着树的宽度遍历树的节点，直到所有节点都被遍历完为止。


## 遍历方式

- 前序遍历：父节点->左子树->右子树

- 中序遍历：左子树->父节点->右子树

- 后序遍历：左子树->右子树->父节点

### 前序遍历

示例:

```
[3,9,20,null,null,15,7]
```

```
  3
  / \
9  20
  /  \
  15   7
```

结果应输出:

```
[3,9,20,15,7]
```

#### 递归

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (root == null) return [];
  const res = [];
  const recursive = (node) => {
    if (node == null) return;
    res.push(node.val);
    recursive(node.left);
    recursive(node.right);
  };
  recursive(root);
  return res;
};
```

#### 迭代

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (root == null) return [];
  const stack = [];
  const res = [];
  stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    const { val, left, right } = node;
    res.push(val);
    // 左孩子后进先出，进行先左后右的深度优先遍历
    if (right) {
      stack.push(right);
    }
    if (left) {
      stack.push(left);
    }
  }
  return res;
};
```

### 中序遍历

示例:

```
[3,9,20,null,null,15,7]
```

```
  3
  / \
9  20
  /  \
  15   7
```

结果应输出:

```
[9,3,15,20,7]
```

#### 递归

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (root == null) return [];
  const res = [];
  const recursive = (node) => {
    if (node == null) return;
    recursive(node.left);
    res.push(node.val);
    recursive(node.right);
  };
  recursive(root);
  return res;
};
```

#### 迭代

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
   if(root == null) return [];
    let stack = [], res = [];
    let p = root;
    while(stack.length || p) {
        while(p) {
            stack.push(p);
            p = p.left;
        }
        let node = stack.pop();
        res.push(node.val);
        p = node.right;
    }
    return res;
};
```


### 后序遍历

示例:

```
[3,9,20,null,null,15,7]
```

```
  3
  / \
9  20
  /  \
  15   7
```


结果应输出:

```
[9,15,7,20,3]
```

#### 递归

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if (root == null) return [];
  const res = [];
  const recursive = (node) => {
    if (node == null) return;
    recursive(node.left);
    recursive(node.right);
    res.push(node.val);
  };
  recursive(root);
  return res;
};
```

#### 迭代

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if (root == null) return [];
  const stack = [];
  const res = [];
  const traversed = new Set();
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    let node = stack[stack.length - 1];
    if (node.right && !traversed.has(node.right)) {
      p = node.right;
      traversed.add(node.right);
    } else {
      res.push(node.val);
      stack.pop();
    }
  }
  return res;
};
```

### 层次遍历

示例:

```
  3
  / \
9  20
  /  \
  15   7
```

结果应输出:

```
[
  [3],
  [9,20],
  [15,7]
]
```

```js
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let queue = [];
    let res = [];
    let level = 0;
    queue.push(root);
    let temp;
    while(queue.length) {
        res.push([]);
        let size = queue.length;
        // 注意一下: size -- 在层次遍历中是一个非常重要的技巧
        while(size --) {
            // 出队
            let front = queue.shift();
            res[level].push(front.val);
            // 入队
            if(front.left) queue.push(front.left);
            if(front.right) queue.push(front.right);
        }
        level++;
    }
    return res;
};
```

## links

- [算法与数据结构-神三元](http://47.98.159.95/leetcode-js)
