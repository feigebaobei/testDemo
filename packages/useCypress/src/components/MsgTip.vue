<template>
    <h2>title of MsgTip</h2>
    <p v-text="msg" class="msg-p"></p>
  <div>
  </div>
</template>

<script lang="ts">
// 工具方法
import { defineComponent, onMounted, computed, ref } from "vue";
// 组件
// import CaInputNumber from '../../InputNumber/src/index.vue';
// 验证
// type/interface
// 配置项
// 指令
// 数据

export default defineComponent({
  name: "MsgTip",
  // components: {
    //     CaInputNumber,
  // },
  // directives
  // inheritAttrs: false,
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  // emits: ['blur'],
  setup(props, ctx) {
    // inject
    // variable
    // ref
    // computed
    // methods
    // provide
    // evnet fn
    // watch
    // lifeCircle
    onMounted(() => {
      console.log("mounted");
    });
    return {
      // variable
      // ref
      // computed
      // methods
      // evnet fn
    };
  },
});
</script>

<style lang="css">
.msg-p {
    color: orange
}
</style>