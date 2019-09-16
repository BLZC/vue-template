<template>
  <div>
    首页
  </div>

</template>

<script>
export default {
  data () {
    return {

    };
  },
  created () {
    this.$store.commit('initTabs')
  }
};
</script>