<template>
    <div>
        <el-drawer
        title="主题配置"
        :visible.sync="config.show"
        :direction="direction">
        <div class="container">
            <div class="container-one">
                <span class="container-one-title">整体风格设置</span>
                <div class="theme-setbtn">
                    <button @click="setTheme('dark')" class="dark btn-size">&nbsp;</button>
                    <button @click="setTheme('transparent')" class="transparent btn-size">&nbsp;</button>
                    <button @click="setTheme('depdark')" class="depdark btn-size">&nbsp;</button>
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
    setTheme (value) {
      this.$store.commit('changeTheme', value);
    }
  }
};
</script>
<style lang="scss" scoped>
    .container {
        padding: 0 20px;
        text-align: left;
        color: #fff;
        .theme-setbtn {
          margin-top: 20px;
          .btn-size {
            width: 60px;
            height: 40px;
          }
          .transparent {
            background: #fff;
          }
        }
    }
</style>
