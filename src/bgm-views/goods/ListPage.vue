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
    订单列表
    <div class="float-right">
      <el-button>添加商品</el-button>
    </div>
    </template>
  </el-card>
</template>