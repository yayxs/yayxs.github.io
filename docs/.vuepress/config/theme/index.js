const themeConfig = require('./themeConfig');
const nav = require('../nav/');
const sidebar = require('../sidebar/');

module.exports = Object.assign({}, themeConfig, {
  nav,
  sidebar,
  logo: '/head.jpg',
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  // 自动形成侧边导航
  sidebar: 'auto'
});
