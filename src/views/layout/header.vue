<template>
  <div class="header">
    <el-row>
      <el-col :span="3"
              class="img-col">
        <el-tooltip class="item"
                    effect="dark"
                    :content="tipText"
                    placement="right">
          <i class="icon"
             :class="vicon"
             @click="changeSide"></i>
        </el-tooltip>
      </el-col>
      <el-col :span="2"
              :offset="16"
              class="message">
        <el-badge :value="3"
                  style="cursor:pointer"
                  class="item">

          <el-dropdown size="small"
                       :hide-timeout='hideTimeout'
                       style="cursor:pointer"
                       placement="bottom">
            <span class="el-dropdown-link">
              <i class="iconfont iconxiaoxi hicon"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="item in warnMsg"
                                :key="item.id">{{item.text}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-badge>
      </el-col>
      <el-col :span="3"
              class="information">
        <el-dropdown size="small"
                     :hide-timeout='hideTimeout'
                     style="cursor:pointer"
                     @command="handClick"
                     placement="bottom">
          <span class="el-dropdown-link">
            <!-- <i class="iconfont iconxiugaitouxiang hicon"></i> -->
            <span class="userMsg">你好&nbsp;&nbsp;{{username}}&nbsp;&nbsp;</span>
            <i class="iconfont iconxiala hicon"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">查看个人信息</el-dropdown-item>
            <el-dropdown-item command="b">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      hideTimeout: 1500,
      username: 'test',
      warnMsg: [
        {
          id: 1,
          text: '今天天气不错'
        },
        {
          id: 2,
          text: '今天适合郊游'
        },
        {
          id: 3,
          text: '可以的'
        }
      ]
    }
  },
  computed: {
    /* 菜单栏开关 */
    vicon () {
      return this.$store.state.home.icon;
    },
    /* 菜单栏标题 */
    tipText () {
      return this.$store.state.home.tipText;
    }
  },
  methods: {
    //改变Side状态
    changeSide () {
      this.$store.commit('switchShow')
    },
    //下拉菜单点击事件
    handClick (command) {
      switch (command) {
        case 'a':
          break;
        case 'b':
          //登出
          this.Logout();
          break;
        default:
          break;
      }
    },
    //登出
    Logout () {
      this.$router.push('/login')
      localStorage.removeItem('user')
      setTimeout(() => {
        this.$LZCMessage('您已登出', 'success')
      })
    }
  }
}
</script>
<style lang="scss">
.hicon {
  color: #fff;
  font-size: 24px;
}
.userMsg {
  font-size: 16px;
  color: #fff;
}
.header {
  .img-col {
    text-align: left;
    padding-left: 5px;
    cursor: pointer;
    .icon {
      font-size: 20px;
      color: #fff;
    }
  }
  .el-badge__content.is-fixed {
    top: 14px !important;
  }
}
</style>