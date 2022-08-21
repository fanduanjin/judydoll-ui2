<template>
  <el-card>
    <template #header>
      <el-button @click="addBrand()">添加</el-button>
    </template>

    <el-table :data="brands" border size="large">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="name" label="品牌名称"></el-table-column>
      <el-table-column label="相关"></el-table-column>
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button @click="editBrand(scope.row)">编辑</el-button>
          <el-button @click="deleteBrand(scope.row)" type="danger"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import { getBrandList, deleteBrand } from "@/api/goodsBrandRequest";
import { ElNotification, ElMessageBox } from "element-plus";
export default {
  data() {
    return { brands: [{ id: 123, name: "test" }] };
  },
  created() {
    this.initBrandList();
  },
  methods: {
    initBrandList() {
      getBrandList().then((res) => {
        this.brands = res.data.data;
      });
    },
    addBrand() {
      this.$router.push("/bgm/goods/addBrand");
    },
    editBrand(row) {
      this.$router.push("/bgm/goods/editBrand/" + row.id);
    },
    deleteBrand(row) {
      ElMessageBox.confirm("确定要删除吗?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type:'warning'
      }).then(() => {
        this.doDeleteBrand(row.id);
      });
    },
    doDeleteBrand(id) {
      deleteBrand(id).then(() => {
        ElNotification.success("删除成功");
        this.initBrandList();
      });
    },
  },
};
</script>