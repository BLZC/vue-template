<template>
  <div class="home" :class="themeClass">
    <el-container class="outcontainer">
      <sidebar></sidebar>
      <el-container>
        <el-header>
          <basic-header></basic-header>
        </el-header>
        <tags></tags>
        <el-main>
          <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-collapse-transition>
              <el-card class="box-card">
                <keep-alive :include="Tags">
                  <router-view />
                </keep-alive>
              </el-card>
            </el-collapse-transition>
          </el-scrollbar>
        </el-main>
        <el-footer>
          <basic-footer></basic-footer>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  watch: {

  },
  computed: {
    Tags () {
      return this.$store.state.home.taglist;
    },
    themeClass () {
      let _theme = this.$store.state.theme.theme;
      return _theme;
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 100vh;
  background: {
    size: 100% 100%;
  }
  .outcontainer {
    height: 100%;
    margin-right: 20px;
    .el-container {
      .el-header,
      .el-footer {
        line-height: 60px;
      }
      .el-footer {
        color: #fff;
        height: 40px !important;
        line-height: 40px;
      }
      .tags {
        width: 100%;
        height: 35px;
        background: transparent;
      }
      .el-main {
        background: #f0f0f0;
        padding: 15px 20px 5px;
      }
    }
  }
}
</style>
