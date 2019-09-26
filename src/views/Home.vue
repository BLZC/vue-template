<template>
  <div class="home">
    <el-container class="outcontainer">
      <sidebar></sidebar>
      <el-container>
        <el-header>
          <the-header></the-header>
        </el-header>
        <tags></tags>
        <el-main>
          <el-collapse-transition>
            <el-card class="box-card">
              <keep-alive :include="Tags">
                <router-view />
              </keep-alive>
            </el-card>
          </el-collapse-transition>
        </el-main>
        <el-footer>
          <the-footer></the-footer>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  computed: {
    Tags () {
      return this.$store.state.home.taglist;
    }
  },
  components: {
    TheHeader: () => import('./layout/Header'),
    Sidebar: () => import('./layout/Sidebar'),
    TheFooter: () => import('./layout/Footer'),
    Tags: () => import('./layout/Tags')
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 100vh;
  background-image: url('../../public/images/main.jpg');
  .outcontainer {
    height: 100%;
    margin-right: 20px;
    .el-container {
      .el-header,
      .el-footer {
        background-color: transparent;
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
        background-color: transparent;
      }
      .el-main {
        background-color: #f0f0f0;
        padding: 15px 20px 5px;
      }
    }
  }
}
</style>
