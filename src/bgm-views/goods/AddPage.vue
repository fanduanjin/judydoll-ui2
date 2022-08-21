<template>
  <el-steps :active="stepsIndex" align-center>
      <el-step title="item" />
  </el-steps>
  <el-button class="btn-next-step" size="large" @click="nextStep">{{
    nextBtnTitle
  }}</el-button>
</template>

<script>
export default {
  data() {
    let steps = [
      "填写商品基础信息",
      "填写商品促销信息",
      "填写商品属性信息",
      "选择商品关联",
    ];

    return {
      stepsIndex: 1,
      steps,
      prevBtnTitle: "",
      nextBtnTitle: "下一步," + steps[1],
    };
  },
  methods: {
    nextStep() {
      this.stepsIndex++;
      if (this.stepsIndex == this.steps.length) {
        this.btnTitle = "完成，提交商品";
      } else if (this.stepsIndex) {
        console.log("");
      }
    },
  },
};
</script>
<style scoped>
.btn-next-step {
  display: block;
  margin: auto;
  width: 20rem;
}
</style>