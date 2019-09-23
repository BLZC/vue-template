import { stat } from 'fs';

export default {
  state: {
    show: true /* Side展开状态 */,
    isCollapse: false /* Side没有收缩 */,
    icon: 'iconfont iconshouqi' /* 伸展图标 */,
    text: 'Vue项目模板' /* 标题 */,
    tipText: '收缩菜单' /* 提示 */,
    tabIndex: {
      name: 'index',
      title: '门户首页',
      path: '/index'
    } /* 首页标签 */,
    tabs: [JSON.parse(localStorage.getItem('currentTab'))] /* 标签数组 */,
    tabNum: null /* 同时可打开的标签数目 */,
    selectTab: JSON.parse(
      localStorage.getItem('currentTab')
    ) /* 当前选中的标签 */,
    // selectTab: null,
    canAdd: true /* 是否可以继续打开标签 */
  },
  mutations: {
    // 是否收缩左侧菜单
    switchShow (state) {
      state.show = !state.show;
      if (state.show) {
        state.isCollapse = false;
        state.icon = 'iconfont iconshouqi';
        state.text = 'Vue项目模板';
        state.tipText = '收缩菜单';
      } else {
        state.isCollapse = true;
        state.icon = 'iconfont iconzhankai1';
        state.text = 'Vue';
        state.tipText = '展开菜单';
      }
    },
    // 计算最多可以同时打开多少个标签
    hasWidth (state, value) {
      state.tabNum = Math.floor((parseInt(value) - 100) / 100);
    },
    // 初始化tabs和selectTab
    initTabs (state, value) {
      state.tabs.pop();
      state.tabs.push(value);
      state.selectTab = value;
    },
    // 添加tab
    addTabs (state, value) {
      let JS = JSON.stringify;
      // 将当前页面存在session中，解决vuex数据刷新后初始化的问题
      // localStorage.setItem('currentTab', JS(value));
      // 要打开的页面标签是否已经存在 ？ 跳转 ： 加入数组
      if (JS(state.tabs).indexOf(JS(value)) < 0) {
        state.tabs.push(value);
        localStorage.setItem('tabs', JS(state.tabs));
      } else {
        state.selectTab = value;
      }
      // 判断是否超过最多同时打开的标签数目
      if (state.tabs.length < state.tabNum) {
        state.canAdd = true;
      } else {
        state.canAdd = false;
      }
    },
    // 恢复tabs
    restoreTabs (state) {
      let JS = JSON.stringify;
      state.tabs.pop();
      let oldTabs = JSON.parse(localStorage.getItem('tabs'));
      if (oldTabs.length > 1) {
        oldTabs.forEach(item => {
          if (JS(state.tabs).indexOf(JS(item)) === -1) {
            state.tabs.push(item);
          }
        });
      } else {
        state.tabs.push(oldTabs);
      }
    },
    // 删除tab
    closeTab (state, value) {
      if (state.tabs.indexOf(value) > -1) {
        state.tabs.splice(state.tabs.indexOf(value), 1);
        localStorage.setItem('tabs', JSON.stringify(state.tabs));
        state.canAdd = true;
        // 如果当前打开的标签只有一个，则删除当前标签后应该跳转到首页标签
        if (!state.tabs.length) {
          state.tabs.push(state.tabIndex);
        }
      }
    },
    // 修改选中的tab
    selectTab (state, value) {
      state.selectTab = value;
      localStorage.setItem('currentTab', JSON.stringify(value));
    },
    // 关闭其他标签
    closeOther (state) {
      state.tabs = [];
      state.tabs.push(state.selectTab);
      localStorage.removeItem('tabs');
      localStorage.setItem('tabs', JSON.stringify(state.selectTab));
    },
    // 关闭所有标签
    closeAll (state) {
      state.tabs = [];
      state.tabs.push(state.tabIndex);
      localStorage.removeItem('tabs');
      localStorage.setItem('tabs', JSON.stringify(state.tabIndex));
    }
  }
};
