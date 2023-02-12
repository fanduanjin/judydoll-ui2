<template>
  <el-form ref="form" :model=category label-width="80px">
    <el-form-item label="分类名称" prop="name">
      <el-input v-model="category.name"></el-input>
    </el-form-item>

    <el-form-item label="图标" prop="pic">
      <el-upload
        class="avatar-uploader"
        action="/oss/qiniuyun/upload"
        :show-file-list="false"
        :on-success="uplodSuccess"
      >
        <img v-if="category.pic" :src="category.pic" class="avatar" />
        <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
      </el-upload>
    </el-form-item>

    <el-form-item>
      <el-button v-if="edit" type="primary" @click="save">保存</el-button>
      <el-button v-else type="primary" @click="add">添加</el-button>
    </el-form-item>
  </el-form>
</template>


<script>
import {get,modify,add} from '@/api/goodsCategory'
import { ElNotification } from "element-plus";
export default {
  name: "goods-category-detail",
  props: {
    edit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      category: { name: "", pic: "" },
    };
  },
  created() {
    if (this.edit) {
      this.loadCategory();
    }else{
      this.parentId=this.$route.params.parentId;
      this.category.parentId=this.parentId;
    }
    console.log(this.category.parentId)
  },
  methods: {
    loadCategory() {
      get(this.$route.params.id).then(res=>{
        this.category=res.data
      });
    },
    uplodSuccess(response) {
      this.category.pic = response.data;
    },
    save(){
      modify(this.category).then(()=>{
        ElNotification.success("修改成功!");
        this.$router.go(-1)
      })
    },
    add(){
      add(this.category).then(()=>{
        ElNotification.success("添加成功!");
        this.$router.go(-1)
      })
    }
  }
};
</script>


