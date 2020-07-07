module.exports = {
  title: 'zzcyes',
  base: '/leetcode/',
  description: 'leetcode',
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
        children: [
          'markdown/二叉树/111.二叉树的最小深度',
          'markdown/二叉树/112.路径总和',
          'markdown/二叉树/235.二叉搜索树的最近公共祖先',
          'markdown/二叉树/236.二叉树的最近公共祖先',
          'markdown/二叉树/513.找树左下角的值',
          'markdown/二叉树/543.二叉树的直径',
        ],
      },
      {
        title: '其他',
        sidebarDepth: 2,
        children: [
          'markdown/其他/165.比较版本号',
          'markdown/其他/27.移除元素',
          'markdown/其他/9.回文数',
        ],
      },
      {
        title: '动态规划',
        sidebarDepth: 2,
        children: ['markdown/动态规划/718.最长重复子数组'],
      },
      {
        title: '哈希表',
        sidebarDepth: 2,
        children: [
          'markdown/哈希表/1.两数之和',
          'markdown/哈希表/146.LRU缓存机制',
          'markdown/哈希表/169.多数元素',
          'markdown/哈希表/3.无重复字符的最长子串',
        ],
      },
      {
        title: '栈',
        sidebarDepth: 2,
        children: ['markdown/栈/155.最小栈', 'markdown/栈/20.有效的括号'],
      },
      { title: '滑动窗口', sidebarDepth: 2, children: [] },
      {
        title: '贪心算法',
        sidebarDepth: 2,
        children: ['markdown/贪心算法/121.买卖股票的最佳时机'],
      },
      {
        title: '链表',
        sidebarDepth: 2,
        children: [
          'markdown/链表/2.两数相加',
          'markdown/链表/206.反转链表',
          'markdown/链表/21.合并两个有序链表',
          'markdown/链表/92.反转链表 II',
        ],
      },
      {
        title: '队列',
        sidebarDepth: 2,
        children: ['markdown/队列/225.用队列实现栈'],
      },
    ],
  },
};
