<template>
  <div class="side">
    <el-aside width="150px"
              :class="{hideClass: isCollapse }">
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-collapse-transition>
          <el-menu default-active=1
                   unique-opened
                   class="el-menu-vertical-demo"
                   background-color="transparent"
                   text-color="#fff"
                   :collapse="isCollapse"
                   router
                   active-text-color="#ffd04b">
            <div class="sildLogo"
                 @click="linkTo">
              {{text}}
            </div>
            <template v-for="item in lists">
              <template v-if="item.children">
                <el-submenu :index="item.path"
                            :key="item.id">
                  <template slot="title">
                    <i :class="item.icon" />
                    <span>{{item.title}}</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item v-for="vitem in item.children"
                                  :key="vitem.id"
                                  :index="vitem.path">
                      <template slot="title">{{vitem.title}}</template>
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </template>
              <template v-else>
                <el-menu-item :index="item.path"
                              :key="item.id">
                  <i :class="item.icon"></i>
                  <span slot="title">{{item.title}}</span>
                </el-menu-item>
              </template>
            </template>
          </el-menu>
        </el-collapse-transition>
      </el-scrollbar>
    </el-aside>
  </div>
</template>
<script>
export default {
  data () {
    return {
      lists: [
        {
          id: 1,
          title: '信息管理',
          path: '1',
          icon: 'iconfont iconkerenxinxiguanli',
          children: [
            {
              id: 2,
              title: '个人信息',
              path: '/about',
              name: 'about',
              icon: ''
            },
            {
              id: 3,
              title: '消息列表',
              path: '/message',
              name: 'message',
              icon: ''
            }
          ]
        },
        {
          id: 4,
          title: '图表库',
          path: '2',
          icon: 'iconfont icontubiao',
          children: [
            {
              id: 5,
              title: 'schart图表',
              path: '/schart',
              name: 'schart',
              icon: ''
            }
          ]
        },
        {
          id: 6,
          title: '编辑器',
          path: '3',
          icon: 'iconfont icon715bianjiqi_niantie',
          children: [
            {
              id: 7,
              title: 'MD编辑器',
              path: '/markdown',
              name: 'markdown',
              icon: ''
            },
            {
              id: 8,
              title: 'QE编辑器',
              path: '/quilleditor',
              name: 'quilleditor',
              icon: ''
            }
          ]
        },
        {
          id: 9,
          title: '博客系统',
          path: '4',
          icon: 'iconfont iconbokeblogger3',
          children: [
            {
              id: 10,
              title: '用户管理',
              path: '/userManage',
              name: 'userManage',
              icon: ''
            }
          ]
        },
        {
          id: 11,
          title: '视频插件',
          path: '5',
          icon: 'iconfont iconshipin',
          children: [
            {
              id: 12,
              title: '视频播放',
              path: '/videoPlay',
              name: 'videoPlay',
              icon: ''
            },
            {
              id: 13,
              title: '视频直播',
              path: '/liveBroadcast',
              name: 'liveBroadcast',
              icon: ''
            }
          ]
        },
        {
          id: 14,
          title: '组件拖放',
          path: '6',
          icon: 'iconfont iconzujian',
          children: [
            {
              id: 15,
              title: 'VueDrag',
              path: '/drag',
              name: 'drag',
              icon: ''
            },
            {
              id: 16,
              title: 'GridLayout',
              path: '/gridLayout',
              name: 'gridLayout',
              icon: ''
            }
          ]
        },
        {
          id: 17,
          title: '系统配置',
          path: '7',
          icon: 'iconfont iconxitong',
          children: [
            {
              id: 18,
              title: '404',
              path: '/404',
              name: 'errpage',
              icon: ''
            }
          ]
        }
      ]
    };
  },
  computed: {
    // 是否收缩左侧菜单
    isCollapse () {
      return this.$store.state.home.isCollapse;
    },
    // logo文字
    text () {
      return this.$store.state.home.text;
    }
  },
  methods: {
    // 添加标签
    addTags (item) {
      let JS = JSON.stringify;
      if (JS(this.tags).indexOf(JS(item)) === -1) {
        if (this.canAdd) {
          this.$store.commit('addTags', item);
          this.$store.commit('selectTag', item);
          this.$router.push(item.path);
        } else {
          this.$LZCMessage('你打开的标签太多了，请关闭一些不用的标签后再尝试打开', 'warning');
        }
      } else {
        this.$store.commit('addTags', item);
        this.$store.commit('selectTag', item);
        this.$router.push(item.path);
      }
    },
    // 跳转首页
    linkTo () {
      this.$router.push('/index');
    }
  }
};
</script>
<style lang="scss" scoped>
.side {
  .el-aside {
    opacity: 1;
    color: #333;
    text-align: center;
    height: 100%;
    .sildLogo {
      cursor: pointer;
      font-size: 18px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-weight: 700;
      color: #fff;
      text-shadow: 1px 1px black, 2px 2px black, 3px 3px black, 4px 4px black,
        5px 5px black, 6px 6px black, 7px 7px black, 8px 8px black;
    }
    .el-menu {
      height: 100%;
      text-align: left;
      padding-right: 1px;
      border-right: none !important;
      .el-submenu {
        font-weight: 550;
        .iconfont {
          margin-right: 10px;
        }
        .el-menu-item-group {
          .el-menu-item {
            padding-left: 55px !important;
            font-weight: 500;
          }
          .el-menu-item:hover {
            background: rgba(0, 0, 0, 0.3) !important;
          }
        }
      }
      .el-menu-item {
        min-width: 100px;
        font-weight: 550;
        .iconfont {
          margin-right: 10px;
        }
      }
      .el-menu-item:hover {
        background: rgba(0, 0, 0, 0.3) !important;
      }
    }
  }
}
</style>
