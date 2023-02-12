<template>
  <el-card>
    <template #header>
      <el-icon><Search /></el-icon>筛选搜索
      <div class="float-right">
        <el-button>重置</el-button><el-button>查询结果</el-button>
      </div>
    </template>

    <el-form inline>
      <el-form-item label="输入搜索 :">
        <el-input placeholder="输入商品名称"></el-input>
      </el-form-item>

      <el-form-item label="商品分类 :">
        <el-input placeholder="请选择商品分类"></el-input>
      </el-form-item>

      <el-form-item label="商品品牌 :">
        <el-select placeholder="请选择商品品牌">
          <el-option label="橘朵" value="true"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="上架状态 :">
        <el-select placeholder="请选择上架状态">
          <el-option label="已上架" value="true"></el-option>
          <el-option label="未上架" value="false"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </el-card>

  <el-card class="margin-top">
    <template #header>
      商品列表
      <div class="float-right">
        <el-button @click="gotoAddGoods">添加商品</el-button>
      </div>
    </template>

    <el-table :data="goods">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="name" label="商品名称"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column label="上架">
        <template #default="scope">
          <el-switch
            v-model="scope.row.enable"
            @change="changeEnable(scope.row)"
          />
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="400px">
        <template #default="scope">
          <el-button @click="gotoEditGoods(scope.row.id)">编辑</el-button>

          <el-button @click="deleteGoods(scope.row.id)" type="danger"
            >删除</el-button
          >
        </template>
      </el-table-column>
      <template #append>
        <el-pagination layout="prev, pager, next" :page-size="pageSize" :total="total" />
      </template>
    </el-table>
  </el-card>
</template>

<script>
import { list, del, modifyEnable } from "@/api/goods";
import { ElNotification, ElMessageBox } from "element-plus";
export default {
  data() {
    return { goods: [] ,
    total:0,
    pageIndex:1,
    pageSize:15};
  },
  created() {
    this.loadGoods();
  },
  methods: {
    loadGoods() {
      list(this.pageIndex, this.pageSize).then((res) => {
        this.goods = res.data;
        this.total=res.total
      });
    },
    gotoAddGoods() {
      this.$router.push("/bgm/goods/add");
    },
    gotoEditGoods(id) {
      this.$router.push("/bgm/goods/edit/" + id);
    },
    deleteGoods(id) {
      ElMessageBox.confirm("确定要删除吗?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.doDeleteGoods(id);
      });
    },
    doDeleteGoods(id) {
      del(id).then((res) => {
        if (res.code != 9200) return;
        ElNotification.success("删除成功");
        this.loadGoods();
      });
    },
    changeEnable(row) {
      modifyEnable(row.id, row.enable)
        .then(() => {
          this.loadGoods();
        })
        .catch(() => {
          row.enable = !row.enable;
        });
    },
  },
};
</script>
