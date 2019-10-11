<template>
  <div class="vue-drag">
    <div class="title">Vue项目里面实现拖动可以参考<a href="https://sortablejs.github.io/Vue.Draggable/#/functional"
         target="_blank">vuedraggable</a>这款插件</div>
    <div class="top-buttons">
      <input id="disabled"
             type="checkbox"
             v-model="enabled"
             class="form-check-input" />
      <label class="form-check-label"
             for="disabled">允许拖动</label>
    </div>

    <div class="drag-content">
      <h3 class="drag-status">Draggable {{ draggingInfo }}</h3>
      <draggable :list="list"
                 :disabled="!enabled"
                 class="list-group lzc-flex"
                 ghost-class="ghost"
                 @start="dragging = true"
                 @end="dragging = false">
        <div class="list-group-item"
             v-for="element in list"
             :key="element.name">
          {{ element.name }}
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
let id = 1;
export default {
  name: 'drag',
  data () {
    return {
      enabled: true,
      list: [
        { name: '模块一', id: 0 },
        { name: '模块二', id: 1 },
        { name: '模块三', id: 2 }
      ],
      dragging: false
    };
  },
  components: {
    draggable
  },
  computed: {
    draggingInfo () {
      return this.dragging ? 'under drag' : '';
    }
  }
};
</script>
<style lang="scss" scoped>
.vue-drag {
  min-height: 400px;
  .title {
    font-weight: 550;
    font-size: 16px;
    text-align: left;
    height: 40px;
    line-height: 40px;
  }
  .top-buttons {
    margin: 20px;
  }
  .drag-content {
    .drag-status {
      color: darkblue;
    }
    .list-group {
      margin-top: 20px;
      .list-group-item {
        height: 40px;
        width: 200px;
        margin: 10px;
        background: aliceblue;
        cursor: move;
        line-height: 40px;
      }
      .list-group-item:nth-child(1) {
        background: antiquewhite;
      }
      .list-group-item:nth-child(2) {
        background: saddlebrown;
      }
    }
  }
}
</style>
