module.exports = {
  title: '洋小洋Blog',
  description: `我家大门常打开`,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
  },
  themeConfig: {
    nav: [
      { text: '前端面试', link: '/interview/' }, // 内部链接 以docs为根目录
      { text: '个人博客', link: 'https://segmentfault.com/u/youngwanli' }, // 外部链接
      // 下拉列表
      {
        text: 'GitHub',
        items: [
          { text: 'GitHub地址', link: 'https://github.com/yayxs' },
          { text: '码云地址', link: 'https://gitee.com/yayxs' }
        ]
      }
    ],
    sidebar: {
      // docs文件夹下面的interview文件夹 文档中md文件 书写的位置(命名随意)
      '/interview/': [
        '/interview/', // 文件夹的README.md 不是下拉框形式
        {
          title: 'HTML基础',
          children: [
            '/interview/html/basic' // 以docs为根目录来查找文件
            // 上面地址查找的是：docs>interview>html>basic.md 文件
            // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
          ]
        }
      ],
      '/miniprogram/': [
        '/miniprogram/', // 文件夹的README.md 不是下拉框形式
        {
          title: 'HTML基础',
          children: [
            '/miniprogram/wiki' // 以docs为根目录来查找文件
            // 上面地址查找的是：docs>accumulate>JS>test.md 文件
            // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
          ]
        }
      ]
    }
  }
};
