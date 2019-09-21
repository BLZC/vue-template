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
        <div>
          <el-tooltip class="item"
                      effect="dark"
                      :content="fullText"
                      placement="bottom">
            <i :class="fullClass"
               @click="handleFullScreen"></i>
          </el-tooltip>
        </div>
        <el-badge :value="3"
                  style="cursor:pointer"
                  class="item">
          <el-tooltip class="item"
                      effect="dark"
                      content="点击查看详细信息"
                      placement="bottom">
            <i class="iconfont iconxiaoxi hicon"
               @click="Checkmsg"></i>
          </el-tooltip>
        </el-badge>
      </el-col>
      <el-col :span="3"
              class="information">
        <span class="el-dropdown-link">
          <!-- <i class="iconfont iconxiugaitouxiang hicon"></i> -->
          <span class="userMsg">你好&nbsp;&nbsp;{{username}}&nbsp;&nbsp;</span>
          <el-dropdown size="small"
                       :hide-timeout='hideTimeout'
                       style="cursor:pointer"
                       @command="handClick"
                       placement="bottom">
            <i class="iconfont iconxiala hicon"></i>
            <el-dropdown-menu slot="dropdown"
                              class="dp1">
              <el-dropdown-item command="a">查看个人信息</el-dropdown-item>
              <el-dropdown-item command="b">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </span>

      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      hideTimeout: 1500,
      username: localStorage.getItem('user'),
      fullClass: 'iconfont hicon iconquanping' /* class */,
      fullText: '全屏' /* tip */,
      isfull: false /* 是否在全屏状态 */,
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
    };
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
    // 改变Side状态
    changeSide () {
      this.$store.commit('switchShow');
    },
    // 下拉菜单点击事件
    handClick (command) {
      switch (command) {
        case 'a':
          this.Toabout();
          break;
        case 'b':
          // 登出
          this.Logout();
          break;
        default:
          break;
      }
    },
    // 查看具体信息
    Checkmsg () {
      this.$router.push('/message');
    },
    // 全屏事件
    handleFullScreen () {
      let element = document.documentElement;
      if (this.isfull) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.isfull = !this.isfull;
      this.fullText = this.isfull ? '取消全屏' : '全屏';
      this.fullClass = this.isfull ? 'iconfont hicon iconcaozuo-quanping-shousuo' : 'iconfont hicon iconquanping';
    },
    // 个人信息
    Toabout () {
      this.$router.push('/about');
    },
    // 登出
    Logout () {
      this.$router.push('/login');
      localStorage.clear();
      localStorage.clear();
      setTimeout(() => {
        this.$LZCMessage('您已登出', 'success');
      });
    }
  }
};
</script>
<style lang="scss">
.dp1 {
  top: 40px !important;
}
.hicon {
  color: #fff;
  font-size: 24px;
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
  .message {
    display: flex;
    justify-content: space-around;
  }
  .userMsg {
    font-size: 16px;
    color: #fff;
  }
  .el-badge__content.is-fixed {
    top: 14px !important;
  }
}
</style>
