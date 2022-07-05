module.exports = {
    "title": "zzcyes",
    "base": "/leetcode/",
    "description": "leetcode every day",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/img/logo.ico"
            }
        ]
    ],
    "theme": "antdocs",
    "themeConfig": {
        "mode": "dark",
        "navbar": true,
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "Last Updated",
        "backToTop": true,
        "nav": [
            {
                "text": "Catalogue",
                "link": "/catalogue"
            },
            {
                "text": "Blog",
                "link": "https://www.zzcyes.com/blogs"
            },
            {
                "text": "Github",
                "link": "https://github.com/zzcyes"
            }
        ],
        "sidebar": [
            [
                "/catalogue",
                "Catalogue"
            ],
            {
                "title": "二叉树",
                "sidebarDepth": 2,
                "children": [
                    "markdown/二叉树/0094.二叉树的中序遍历",
                    "markdown/二叉树/0100.相同的树",
                    "markdown/二叉树/0101.对称二叉树",
                    "markdown/二叉树/0104.二叉树的最大深度",
                    "markdown/二叉树/0110.平衡二叉树",
                    "markdown/二叉树/0111.二叉树的最小深度",
                    "markdown/二叉树/0112.路径总和",
                    "markdown/二叉树/0124.二叉树中的最大路径和",
                    "markdown/二叉树/0144.二叉树的前序遍历",
                    "markdown/二叉树/0145.二叉树的后序遍历",
                    "markdown/二叉树/0199.二叉树的右视图",
                    "markdown/二叉树/0230.二叉搜索树中第K小的元素",
                    "markdown/二叉树/0235.二叉搜索树的最近公共祖先",
                    "markdown/二叉树/0236.二叉树的最近公共祖先",
                    "markdown/二叉树/0257.二叉树的所有路径",
                    "markdown/二叉树/0513.找树左下角的值",
                    "markdown/二叉树/0543.二叉树的直径"
                ]
            },
            {
                "title": "其他",
                "sidebarDepth": 2,
                "children": [
                    "markdown/其他/0007.整数反转",
                    "markdown/其他/0008.字符串转换整数atoi",
                    "markdown/其他/0009.回文数",
                    "markdown/其他/0014.最长公共前缀",
                    "markdown/其他/0027.移除元素",
                    "markdown/其他/0050.Pow(x,n)",
                    "markdown/其他/0165.比较版本号",
                    "markdown/其他/0238.除自身以外数组的乘积"
                ]
            },
            {
                "title": "动态规划",
                "sidebarDepth": 2,
                "children": [
                    "markdown/动态规划/0005.最长回文子串",
                    "markdown/动态规划/0053.最大子序和",
                    "markdown/动态规划/0062.不同路径",
                    "markdown/动态规划/0063.不同路径II",
                    "markdown/动态规划/0064.最小路径和",
                    "markdown/动态规划/0070.爬楼梯",
                    "markdown/动态规划/0072.编辑距离",
                    "markdown/动态规划/0091.解码方法",
                    "markdown/动态规划/0120.三角形最小路径和",
                    "markdown/动态规划/0121.买卖股票的最佳时机",
                    "markdown/动态规划/0198.打家劫舍",
                    "markdown/动态规划/0213.打家劫舍II",
                    "markdown/动态规划/0303.区域和检索-数组不可变",
                    "markdown/动态规划/0309.最佳买卖股票时机含冷冻期",
                    "markdown/动态规划/0392.判断子序列",
                    "markdown/动态规划/0718.最长重复子数组",
                    "markdown/动态规划/0746.使用最小花费爬楼梯",
                    "markdown/动态规划/1025.除数博弈"
                ]
            },
            {
                "title": "双指针",
                "sidebarDepth": 2,
                "children": [
                    "markdown/双指针/0011.盛最多水的容器",
                    "markdown/双指针/0015.三数之和",
                    "markdown/双指针/0026.删除排序数组中的重复项",
                    "markdown/双指针/0028.实现strStr()",
                    "markdown/双指针/0058.最后一个单词的长度",
                    "markdown/双指针/0088.合并两个有序数组",
                    "markdown/双指针/0125.验证回文串",
                    "markdown/双指针/0167.两数之和II-输入有序数组",
                    "markdown/双指针/0344.反转字符串",
                    "markdown/双指针/0345.反转字符串中的元音字母",
                    "markdown/双指针/0541.反转字符串II"
                ]
            },
            {
                "title": "哈希表",
                "sidebarDepth": 2,
                "children": [
                    "markdown/哈希表/0001.两数之和",
                    "markdown/哈希表/0003.无重复字符的最长子串",
                    "markdown/哈希表/0018.四数之和",
                    "markdown/哈希表/0136.只出现一次的数字",
                    "markdown/哈希表/0146.LRU缓存机制",
                    "markdown/哈希表/0169.多数元素",
                    "markdown/哈希表/0202.快乐数",
                    "markdown/哈希表/0205.同构字符串",
                    "markdown/哈希表/0217.存在重复元素",
                    "markdown/哈希表/0409.最长回文串"
                ]
            },
            {
                "title": "回溯",
                "sidebarDepth": 2,
                "children": [
                    "markdown/回溯/0017.电话号码的字母组合",
                    "markdown/回溯/0046.全排列",
                    "markdown/回溯/0051.N皇后",
                    "markdown/回溯/0401.二进制手表",
                    "markdown/回溯/0784.字母大小写全排列"
                ]
            },
            {
                "title": "排序",
                "sidebarDepth": 2,
                "children": [
                    "markdown/排序/0004.寻找两个正序数组的中位数",
                    "markdown/排序/0215.数组中的第K个最大元素",
                    "markdown/排序/0378.有序矩阵中第K小的元素"
                ]
            },
            {
                "title": "栈",
                "sidebarDepth": 2,
                "children": [
                    "markdown/栈/0020.有效的括号",
                    "markdown/栈/0155.最小栈"
                ]
            },
            {
                "title": "贪心算法",
                "sidebarDepth": 2,
                "children": [
                    "markdown/贪心算法/0121.买卖股票的最佳时机"
                ]
            },
            {
                "title": "链表",
                "sidebarDepth": 2,
                "children": [
                    "markdown/链表/0002.两数相加",
                    "markdown/链表/0019.删除链表的倒数第N个节点",
                    "markdown/链表/0021.合并两个有序链表",
                    "markdown/链表/0061.旋转链表",
                    "markdown/链表/0092.反转链表II",
                    "markdown/链表/0160.相交链表",
                    "markdown/链表/0206.反转链表",
                    "markdown/链表/0237.删除链表中的节点"
                ]
            },
            {
                "title": "队列",
                "sidebarDepth": 2,
                "children": [
                    "markdown/队列/0225.用队列实现栈"
                ]
            }
        ]
    }
}