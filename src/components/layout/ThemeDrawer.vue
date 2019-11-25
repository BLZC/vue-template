<template>
    <div>
        <el-drawer
        title="主题配置"
        :visible.sync="config.show"
        :direction="direction">
        <div class="container">
            <div class="container-one">
                <span class="container-one-title">整体风格设置</span>
                <div>
                    <el-button type="primary" @click="setTheme" size="small">是否背景透明</el-button>
                </div>
            </div>
        </div>
        </el-drawer>
    </div>
</template>
<script>
export default {
  data () {
    return {
      drawer: false,
      direction: 'rtl'
    };
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  methods: {
    setTheme () {
      this.$store.commit('changeTheme');
    }
  }
};
</script>
<style lang="scss" scoped>
    .container {
        padding: 0 20px;
        text-align: left;
        color: #fff;
    }
</style>
