<template>
  <el-card>
    <template #header>
      <el-button @click="addCategory()">添加</el-button>
    </template>

    <el-table :data="brands" border size="large" >
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="name" label="分类名称"></el-table-column>
      <el-table-column label="分类等级" align="center">
        {{parentId!=0?'二级分类':'一级分类'}}</el-table-column>
      <el-table-column v-if="parentId!=0" label="图片" align="center">
        <template #default="scope">
          <img :src="scope.row.pic" :height="60" :width="60" />
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center" width="400px">
        <template #default="scope">
          <el-button @click="editCategory(scope.row)">编辑</el-button>
          <el-button
            v-if="parentId == 0"
            @click="gotoSecondCategory(scope.row)"
            type="danger"
            >查看二级分类</el-button
          >
          <el-button @click="delCategory(scope.row)" type="danger"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import { list, del } from "@/api/goodsCategory";
import { ElNotification, ElMessageBox } from "element-plus";
export default {
  data() {
    return { brands: [] };
  },
  created() {
    this.parentId = this.$route.query.parentId | 0;
    this.loadGoodsCategoryList();
  },
  watch: {
    $route() {
      this.$router.go(0);
    },
  },
  methods: {
    loadGoodsCategoryList() {
      list(1, 15, this.parentId).then((res) => {
        this.brands = res.data;
      });
    },
    addCategory() {
      this.$router.push("/bgm/goods/addCategory/"+this.parentId);
      console.log(this.parentId)
    },
    editCategory(row) {
      this.$router.push("/bgm/goods/editCategory/" + row.id);
    },
    delCategory(row) {
      ElMessageBox.confirm("确定要删除吗?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.doDelGoodsCategory(row.id);
      });
    },
    doDelGoodsCategory(id) {
      del(id).then(() => {
        ElNotification.success("删除成功");
        this.loadGoodsCategoryList();
      });
    },
    gotoSecondCategory(row) {
      //跳转到二级分类列表
      this.$router.push({
        path: "/bgm/goods/category",
        query: { parentId: row.id },
      });
    },
  },
};
</script>