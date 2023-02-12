<template>
    <el-card>
        <template #header>
            <el-button @click="gotoAddCoupons">添加优惠券</el-button>
        </template>

        <el-table>

        </el-table>
    </el-card>
</template>


<script>
export default {
    data(){
        return {}    
    },
    methods:{
        gotoAddCoupons(){
            this.$router.push('/bgm/sales/addCoupons')
        }
    }
}
</script>