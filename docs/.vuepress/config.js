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
      { text: '前端面试', link: '/htmlBasic/' }, // 内部链接 以docs为根目录
      { text: '博客', link: 'https://segmentfault.com/u/youngwanli' }, // 外部链接
      // 下拉列表
      {
        text: 'GitHub',
        items: [{ text: 'GitHub地址', link: 'https://github.com/yayxs' }]
      }
    ],
    sidebar: {
      // docs文件夹下面的htmlBasic文件夹 文档中md文件 书写的位置(命名随意)
      '/htmlBasic/': [
        '/htmlBasic/', // accumulate文件夹的README.md 不是下拉框形式
        {
          title: '侧边栏下拉框的标题1',
          children: [
            '/ahtmlBasic/JS/test' // 以docs为根目录来查找文件
            // 上面地址查找的是：docs>accumulate>JS>test.md 文件
            // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
          ]
        }
      ]
    }
  }
};
