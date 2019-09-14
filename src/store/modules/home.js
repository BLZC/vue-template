export default {
  state: {
    show: true /* Side展开状态 */,
    isCollapse: false /* Side没有收缩 */,
    icon: 'iconfont iconshouqi' /* 伸展图标 */,
    text: 'Vue项目模板' /* 标题 */,
    tipText: '收缩菜单' /* 提示 */,
    tabIndex: {
      id: 1,
      name: '门户首页',
      path: '/index',
      icon: 'iconfont iconshouye'
    } /* 首页标签 */,
    tabs: [JSON.parse(localStorage.getItem('currentTab'))] /* 标签数组 */,
    tabNum: null /* 同时可打开的标签数目 */,
    selectTab: JSON.parse(
      localStorage.getItem('currentTab')
    ) /* 当前选中的标签 */,
    canAdd: true /* 是否可以继续打开标签 */
  },
  mutations: {
    //是否收缩左侧菜单
    switchShow(state) {
      state.show = state.show ? false : true
      if (state.show) {
        state.isCollapse = false
        state.icon = 'iconfont iconshouqi'
        state.text = 'Vue项目模板'
        state.tipText = '收缩菜单'
      } else {
        state.isCollapse = true
        state.icon = 'iconfont iconzhankai1'
        state.text = 'Vue'
        state.tipText = '展开菜单'
      }
    },
    //计算最多可以同时打开多少个标签
    hasWidth(state, value) {
      state.tabNum = Math.floor((parseInt(value) - 100) / 100)
    },
    //添加tab
    addTabs(state, value) {
      let JS = JSON.stringify
      //解决vuex数据刷新后初始化的问题
      localStorage.setItem('currentTab', JS(value))
      if (JS(state.tabs).indexOf(JS(value)) < 0) {
        state.tabs.push(value)
      } else {
        state.selectTab = value
      }
      if (state.tabs.length < state.tabNum) {
        state.canAdd = true
      } else {
        state.canAdd = false
      }
    },
    //删除tab
    closeTab(state, value) {
      if (state.tabs.indexOf(value) > -1) {
        state.tabs.splice(state.tabs.indexOf(value), 1)
        state.canAdd = true
        if (!state.tabs.length) {
          state.tabs.push(state.tabIndex)
        }
      }
    },
    //修改选中的tab
    selectTab(state, value) {
      state.selectTab = value
    },
    //关闭其他标签
    closeOther(state) {
      state.tabs = []
      state.tabs.push(state.selectTab)
    },
    //关闭所有标签
    closeAll(state) {
      state.tabs = []
      state.tabs.push(state.tabIndex)
    }
  }
}
