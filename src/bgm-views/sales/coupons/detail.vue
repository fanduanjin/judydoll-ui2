<template>
  <el-form :model="coupons" label-position="right" label-width="120px">
    <el-form-item label="优惠券名称">
      <el-input v-model="coupons.name" />
    </el-form-item>

    <el-form-item label="总发行量">
      <el-input-number v-model="coupons.total" />
    </el-form-item>

    <el-form-item label="面额">
      <el-input-number v-model="coupons.price" />
    </el-form-item>

    <el-form-item label="使用门槛">
      <el-input-number v-model="coupons.limit" />
    </el-form-item>

    <el-form-item label="领取日期">
      <el-date-picker
        v-model="coupons.drawDate"
        type="date"
        placeholder=""
      />
    </el-form-item>

    <el-form-item label="有效期">
      <el-date-picker
      v-model="coupons.termDate"
      type="daterange"
      range-separator=" 至 "
      start-placeholder="开始时间"
      end-placeholder="结束时间"
    />
    </el-form-item>

    <el-form-item label="备注">
      <el-input v-model="coupons.remarks" />
    </el-form-item>

    <el-form-item>
      <el-button @click="saveCoupons">添加</el-button>
      <el-button>保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {save} from '@/api/coupons'
export default {
  props: {
    edit: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return {
      coupons:{}
    }
  },
  methods:{
    saveCoupons(){
      if(!this.coupons.termDate||this.coupons.termDate.length!=2){
        console.warn("未选择优惠券有效期")
        return
      }
      this.coupons.startTermDate=this.coupons.termDate[0]
      this.coupons.endTermDate=this.coupons.termDate[1]
      save(this.coupons).then(res=>{
        console.log(res.data)
      }).catch(err=>{
        console.log(err)
      })
    }
  }
};
</script>