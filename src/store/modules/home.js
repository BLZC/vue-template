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
    tags: [JSON.parse(localStorage.getItem('currentTag'))] /* 标签数组 */,
    tabNum: null /* 同时可打开的标签数目 */,
    selectTag: JSON.parse(
      localStorage.getItem('currentTag')
    ) /* 当前选中的标签 */,
    // selectTag: null,
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
    // 初始化tags和selectTag
    initTags (state, value) {
      state.tags = [];
      state.tags.push(value);
      state.selectTag = value;
    },
    // 添加tab
    addTags (state, value) {
      let JS = JSON.stringify;
      // 将当前页面存在session中，解决vuex数据刷新后初始化的问题
      // localStorage.setItem('currentTag', JS(value));
      // 要打开的页面标签是否已经存在 ？ 跳转 ： 加入数组
      if (JS(state.tags).indexOf(JS(value)) < 0) {
        state.tags.push(value);
        localStorage.setItem('tags', JS(state.tags));
      } else {
        state.selectTag = value;
      }
      // 判断是否超过最多同时打开的标签数目
      if (state.tags.length < state.tabNum) {
        state.canAdd = true;
      } else {
        state.canAdd = false;
      }
    },
    // 恢复tags
    restoreTags (state) {
      let JS = JSON.stringify;
      state.tags = [];
      let oldTags = JSON.parse(localStorage.getItem('tags'));
      if (oldTags.length > 1) {
        oldTags.forEach(item => {
          if (JS(state.tags).indexOf(JS(item)) === -1) {
            state.tags.push(item);
          }
        });
      } else {
        state.tags.push(oldTags);
      }
    },
    // 删除tab
    closeTab (state, value) {
      if (state.tags.indexOf(value) > -1) {
        state.tags.splice(state.tags.indexOf(value), 1);
        localStorage.setItem('tags', JSON.stringify(state.tags));
        state.canAdd = true;
        // 如果当前打开的标签只有一个，则删除当前标签后应该跳转到首页标签
        if (!state.tags.length) {
          state.tags.push(state.tabIndex);
        }
      }
    },
    // 修改选中的tab
    selectTag (state, value) {
      state.selectTag = value;
      localStorage.setItem('currentTag', JSON.stringify(value));
    },
    // 关闭其他标签
    closeOther (state) {
      state.tags = [];
      state.tags.push(state.selectTag);
      localStorage.removeItem('tags');
      localStorage.setItem('tags', JSON.stringify(state.selectTag));
    },
    // 关闭所有标签
    closeAll (state) {
      state.tags = [];
      state.tags.push(state.tabIndex);
      localStorage.removeItem('tags');
      localStorage.setItem('tags', JSON.stringify(state.tabIndex));
    }
  }
};
