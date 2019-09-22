<!-- Tabs组件 -->
<template>
  <div class="tabs"
       id="tabs"
       ref="tabs">
    <div class="tab_item"
         ref="tab_item"
         id="tab_item"
         v-for="(item, index) in tabs"
         :key="index"
         :class="{Sclass: selectTab.name === item.name}"
         @click="switchTab(item)">
      <div class="tab_item_container">
        <div class="text">{{item.title}}</div>
        <div class="closeImg">
          <i class="el-icon-close"
             @click.stop="closeTab(item)"></i>
        </div>
      </div>
    </div>
    <div class="close_button">
      <el-dropdown trigger="hover"
                   @command="handleCommand">
        <span class="el-dropdown-link">
          标签选项<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="other"
                            @click="closeOther">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all"
                            @click="closeAll">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {};
  },
  computed: {
    /* 所有已经打开的标签 */
    tabs () {
      return this.$store.state.home.tabs;
    },
    /* 当前选中的标签 */
    selectTab () {
      return this.$store.state.home.selectTab;
    },
    /* 是否可以继续打开标签 */
    canAdd () {
      return this.$store.state.home.canAdd;
    }
  },
  watch: {
    /**
     * 监听路由变化
     * TODO: 注意直接在地址栏改变路由的情况无法监听
     */
    $route (newValue, oldValue) {
      this.setTabs(newValue);
    }
  },
  mounted () {
    this.Init();
  },
  methods: {
    // 计算tabs宽度
    Init () {
      let len = this.$refs.tabs.scrollWidth;
      this.$store.commit('hasWidth', len);
      this.$store.commit('restoreTabs');
      let route = this.$route;
      this.setTabs(route);
    },
    // 设置标签
    setTabs (route) {
      let newItem = {
        title: route.meta.title,
        path: route.fullPath,
        name: route.name
      };
      // 该页面标签是否已经存在 ？ 跳转到该标签 ：新增并跳转
      const isExist = this.tabs.some(item => {
        return item.path === route.fullPath;
      });
      if (!isExist) {
        if (this.canAdd) {
          this.$store.commit('addTabs', newItem);
          this.$store.commit('selectTab', newItem);
        } else {
          this.$LZCMessage('你打开的标签太多了，请关闭一些不用的标签后再尝试打开', 'warning');
        }
      } else {
        this.$store.commit('selectTab', newItem);
      }
    },
    // 关闭标签
    closeTab (value) {
      this.$store.commit('closeTab', value);
      let len = this.tabs.length;
      if (len) {
        let item = this.tabs[len - 1];
        this.switchTab(item);
        localStorage.setItem('currentTab', JSON.stringify(item));
      }
    },
    // 切换标签
    switchTab (value) {
      this.$router.push(value.path);
    },
    // 下拉菜单点击事件处理
    handleCommand (command) {
      if (command === 'other') {
        this.closeOther();
      } else {
        this.closeAll();
      }
    },
    // 关闭其他标签
    closeOther () {
      this.$store.commit('closeOther');
    },
    // 关闭全部标签
    closeAll () {
      this.$store.commit('closeAll');
      let len = this.tabs.length;
      if (len) {
        let item = this.tabs[len - 1];
        this.switchTab(item);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.Sclass {
  background-color: #f0f0f0 !important;
  color: #000 !important;
  .el-icon-close {
    display: inline-block !important;
  }
}
.tabs {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  .close_button {
    position: fixed;
    right: 0;
    padding: 0 10px;
    height: 35px;
    line-height: 35px;
    cursor: pointer;
    background-color: #bbffff;
  }
  .tab_item {
    margin-right: 2px;
    position: relative;
    width: 100px;
    height: 35px;
    cursor: pointer;
    line-height: 35px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    .tab_item_container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .text {
        width: 70%;
        font-size: 14px;
      }
      .el-icon-close {
        display: none;
      }
    }
  }
  .tab_item:hover {
    background-color: #f0f0f0;
    color: #000;
    .el-icon-close {
      display: inline-block;
    }
    .el-icon-close:hover {
      background-color: #ddd;
      padding: 2px;
      border-radius: 50%;
    }
  }
}
</style>
