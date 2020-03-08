<template>
<div class="testdetail">
     <navbar title="学生测试详情"></navbar>
     <div class="group" v-for="(item,index) in data" :key="index">
         <div class="photo_item" >
             照相机
         </div>
         <div class="photo_item2">
             <img src="~@/assets/img/laba.png" alt="">
             <img src="~@/assets/img/gou.png" alt="">
             <img src="~@/assets/img/cha.png" alt="">
         </div>
     </div>
</div>
</template>

<script>
import navbar from "@/components/navbar"
export default {
    
name:'testdetail',
data(){
    return{
        //模拟数据
        data:[
            {},
            {},
            {},
            {},
            {},
            {},
        ]
    }
},
components:{
    navbar
}
}
</script>

<style scoped lang='scss'>
.testdetail{
    width:100%;
    height:100%;
}
.group{
    display:flex;
    height:10vh;
    border-top:1vh solid  #ECECED;
    align-items: center;
    justify-content: space-between;
           box-sizing: border-box;
           padding:0 5px;
    .photo_item{
        box-sizing: border-box;
        width:40%;
        height:80%;
        text-align: center;
        line-height:8vh;
        background:#ECECED;
        
    }
    .photo_item2{
      width:40%;
      height:100%;
      display:flex;
      align-items: center;
    }
}

</style>