module.exports = {
    title: 'zzcyes',
    base: '/leetcode/',
    description: 'leetcode every day',
    head: [['link', { rel: 'icon', href: '/img/logo.ico' }]],
    theme: 'antdocs',
    themeConfig: {
        mode: 'dark',
        navbar: true,
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: 'Last Updated',
        backToTop: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Catalogue', link: '/catalogue' },
            { text: 'Blog', link: 'http://www.zzcyes.com/blog' },
            { text: 'Github', link: 'https://github.com/zzcyes' },
        ],
        sidebar: [
            ['/catalogue', 'Catalogue'],
            {
                title: '二叉树',
                sidebarDepth: 2,
                children:
                    ['markdown/二叉树/101.对称二叉树',
                        'markdown/二叉树/111.二叉树的最小深度',
                        'markdown/二叉树/112.路径总和',
                        'markdown/二叉树/235.二叉搜索树的最近公共祖先',
                        'markdown/二叉树/236.二叉树的最近公共祖先',
                        'markdown/二叉树/513.找树左下角的值',
                        'markdown/二叉树/543.二叉树的直径']
            },
            {
                title: '其他',
                sidebarDepth: 2,
                children:
                    ['markdown/其他/165.比较版本号',
                        'markdown/其他/27.移除元素',
                        'markdown/其他/9.回文数']
            },
            {
                title: '动态规划',
                sidebarDepth: 2,
                children:
                    ['markdown/动态规划/1025.除数博弈',
                        'markdown/动态规划/120.三角形最小路径和',
                        'markdown/动态规划/198.打家劫舍',
                        'markdown/动态规划/213.打家劫舍II',
                        'markdown/动态规划/303.区域和检索-数组不可变',
                        'markdown/动态规划/309.最佳买卖股票时机含冷冻期',
                        'markdown/动态规划/392.判断子序列',
                        'markdown/动态规划/5.最长回文子串',
                        'markdown/动态规划/50.Pow(x,n)',
                        'markdown/动态规划/53.最大子序和',
                        'markdown/动态规划/62.不同路径',
                        'markdown/动态规划/63.不同路径II',
                        'markdown/动态规划/64.最小路径和',
                        'markdown/动态规划/70.爬楼梯',
                        'markdown/动态规划/718.最长重复子数组',
                        'markdown/动态规划/72.编辑距离',
                        'markdown/动态规划/746.使用最小花费爬楼梯',
                        'markdown/动态规划/91.解码方法']
            },
            {
                title: '双指针',
                sidebarDepth: 2,
                children:
                    ['markdown/双指针/11.盛最多水的容器',
                        'markdown/双指针/28.实现 strStr()',
                        'markdown/双指针/344.反转字符串',
                        'markdown/双指针/345.反转字符串中的元音字母']
            },
            {
                title: '哈希表',
                sidebarDepth: 2,
                children:
                    ['markdown/哈希表/1.两数之和',
                        'markdown/哈希表/146.LRU缓存机制',
                        'markdown/哈希表/169.多数元素',
                        'markdown/哈希表/3.无重复字符的最长子串',
                        'markdown/哈希表/202.快乐数',
                    ]
            },
            {
                title: '回溯',
                sidebarDepth: 2,
                children: ['markdown/回溯/51.N皇后', 'markdown/回溯/784.字母大小写全排列']
            },
            {
                title: '排序',
                sidebarDepth: 2,
                children: ['markdown/排序/378.有序矩阵中第K小的元素']
            },
            {
                title: '栈',
                sidebarDepth: 2,
                children: ['markdown/栈/155.最小栈', 'markdown/栈/20.有效的括号']
            },
            {
                title: '贪心算法',
                sidebarDepth: 2,
                children: ['markdown/贪心算法/121.买卖股票的最佳时机']
            },
            {
                title: '链表',
                sidebarDepth: 2,
                children:
                    ['markdown/链表/2.两数相加',
                        'markdown/链表/206.反转链表',
                        'markdown/链表/21.合并两个有序链表',
                        'markdown/链表/92.反转链表 II']
            },
            {
                title: '队列',
                sidebarDepth: 2,
                children: ['markdown/队列/225.用队列实现栈']
            }
        ],
    },
};
