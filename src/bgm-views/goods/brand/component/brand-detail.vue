<template>
  <span>状态: {{ edit?'编辑':'新增' }}</span>
</template>

<script>
export default {
  name: "brand-detail",
  props: {
    brand: {
      type: Object,
      default: () => {},
    },
    edit: {
      type: Boolean,
      default: false,
    },
  },
  created() {
  },
};
</script>
