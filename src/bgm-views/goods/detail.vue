<template>
  <el-card>
    <el-form :model="goods">
      <el-form-item label="商品分类">
        <el-cascader
          :options="categorys"
          :props="props"
          v-model="goods.categoryId"
        />
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input v-model="goods.name"></el-input>
      </el-form-item>
      <el-form-item label="商品标题">
        <el-input v-model="goods.title"></el-input>
      </el-form-item>
      <el-form-item label="商品介绍">
        <el-input v-model="goods.introduce"></el-input>
      </el-form-item>

      <el-form-item label="商品主图">
        <el-upload
          class="avatar-uploader"
          :file-list="goods.picList"
          action="/oss/qiniuyun/upload"
          :show-file-list="true"
          list-type="picture-card"
          :on-success="uploadSuccessHandler"
        >
          <el-icon class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>

      <el-form-item label="商品价格">
        <el-input-number v-model="goods.price" />
      </el-form-item>

      <el-form-item label="商品规格">
        <div>
          <span v-for="(item, index) in goods.sku" :key="item">
            {{ item }}
            <el-button @click="removeSku(index)" link>
              <el-icon><Delete /></el-icon>
            </el-button>
          </span>
        </div>
        <el-divider border-style="none" style="margin: 5px" />
        <el-input v-model="skuTemp" input-style="width:200px;">
          <template #append>
            <el-button @click="addSku">添加</el-button>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item label="商品库存">
        <el-input-number v-model="goods.stock" />
      </el-form-item>

      <el-form-item label="商品上架">
        <el-switch v-model="goods.enable" />
      </el-form-item>

      <el-form-item label="商品折扣">
        <el-input-number v-model="goods.discount" /> &nbsp;折
      </el-form-item>

      <el-form-item label="商品页面">
        <Toolbar
          style="border: 1px solid #ccc"
          :editor="editorRef"
          :defaultConfig="toolbarConfig"
          :mode="mode"
        />
        <Editor
          style="
            height: 500px;
            width: 100%;
            overflow-y: hidden;
            border: 1px solid #ccc;
          "
          v-model="goods.html"
          :defaultConfig="editorConfig"
          :mode="mode"
          @onCreated="handleCreated"
        />
      </el-form-item>
      <el-form-item>
        <el-button v-if="edit" type="primary" @click="saveGoods">保存</el-button>
        <el-button type="primary" @click="addGoods">添加</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { ref, shallowRef } from "vue";
import { ElNotification } from "element-plus";
import { getTree } from "@/api/goodsCategory";
import { save, getGoodsInfo,modify } from "@/api/goods";
export default {
  components: { Editor, Toolbar },
  data() {
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef();
    // 内容 HTML
    const valueHtml = ref("");
    const toolbarConfig = {};
    const MENU_CONF = {
      uploadImage: {
        server: "oss/qiniuyun/upload",
        fieldName: "file",
        maxNumberOfFiles: 1,
        customInsert(res, insertFn) {
          insertFn(res.data, "", "");
        },
      },
    };
    const editorConfig = {
      MENU_CONF,
    };
    const handleCreated = (editor) => {
      editorRef.value = editor; // 记录 editor 实例，重要！
    };
    let goods = {
      html: valueHtml,
      picList: [],
      newPicList: [],
      sku: [],
    };
  
    let props = {
      expandTrigger: "hover",
      value: "id",
      label: "name",
      emitPath: false,
      children: "childNode",
    };
    this.loadCategorys();
    return {
      categorys: [],
      skuTemp: "",
      goods,
      props,
      editorRef,
      mode: "default", // 或 'simple'
      toolbarConfig,
      editorConfig,
      handleCreated,
    };
  },
  created() {
    if (this.edit) {
      this.loadGoodsInfo();
    }
  },
  props: {
    edit: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    loadGoodsInfo() {
      let id = this.$route.params.id;
      this.id=id;
      getGoodsInfo(id).then((res) => {
        if (res.code != 9200) return;
        this.goods=res.data;
        this.goods.sku=res.data.sku.split(",")
        let imageUrls=res.data.images.split(',');
        this.goods.picList=[]
        for(let index in imageUrls){
          this.goods.picList.push({url:imageUrls[index]})
        }
        this.goods.newPicList=[]
      });
    },
    loadCategorys() {
      getTree().then((res) => {
        this.categorys = res.data;
      });
    },
    addGoods() {
      save(this.goods).then(res => {
        if(res.code==9200)
        this.$router.push("/bgm/goods/list");
      });
    },
    saveGoods() {
      let data=JSON.parse(  JSON.stringify(this.goods))
      let temp=data.picList;
      data.picList=[]
      for(let index in temp){
        let item=temp[index]
        data.picList.push(item['url'])
      }
      temp=data.newPicList
      console.log(data)
      data.newPicList=[]
      for(let index in temp){
        let item=temp[index]
        data.newPicList.push(item)
      }
      modify(data).then(res=>{
         if(res.code==9200)
        this.$router.push("/bgm/goods/list");
      })
    },
    uploadSuccessHandler(res) {
      //处理上传主图成功
      if (res.code != 9200) {
        console.warn(res.message);
        ElNotification.error(res.message);
        return Promise.reject(res);
      }
      console.log(res.data)
      this.goods.newPicList.push(res.data);
    },
    removeSku(index) {
      this.goods.sku.splice(index, 1);
    },
    addSku() {
      this.goods.sku.push(this.skuTemp);
      this.skuTemp = "";
    },
  },
  beforeUnmount() {
    const editor = this.editorRef.value;
    if (editor == null) return;
    editor.destroy();
  },
};
</script>

