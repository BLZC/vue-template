<template>
  <div class="home">
    <el-container>
      <Side></Side>
      <el-container>
        <el-header>
          <my-header></my-header>
        </el-header>
        <Tags></Tags>
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
          <Foot></Foot>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Tags: []
    };
  },
  computed: {
    Tagslist () {
      return this.setTags(this.$store.state.home.tags);
    }
  },
  components: {
    MyHeader: () => import('./layout/header'),
    Side: () => import('./layout/side'),
    Foot: () => import('./layout/footer'),
    Tags: () => import('./layout/tags')

  },
  methods: {
    // keep-alive实现缓存
    setTags (val) {
      this.Tags = [];
      if (val.length) {
        val.forEach(element => {
          this.Tags.push(element.name);
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 100vh;
  background-image: url('../../public/images/main.jpg');
  .el-container {
    height: 100%;
    .el-container {
      .el-header,
      .el-footer {
        padding-left: 0 !important;
        background-color: transparent;
        color: #333;
        text-align: center;
        line-height: 60px;
      }
      .el-footer {
        background-color: #f2f6fc;
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
        color: #333;
        text-align: center;
        padding: 15px 20px 5px;
      }
    }
  }
}
</style>
