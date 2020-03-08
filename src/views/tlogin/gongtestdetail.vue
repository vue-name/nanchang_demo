<template>
<div class="testdetail">
     <navbar title="学生功能详情"></navbar>
     <div class="gong_item">
         <div class="item1">功能录音</div>
         <div class="item2">
             <input type="text">
         </div>
         <img src="~@/assets/img/laba.png" class="item3">

         <div class="item4">确认</div>
     </div>
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
    
name:'gongtestdetail',
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
.gong_item{
    display:flex;
    justify-content: space-around;
    align-items: center;
    border-top:2px solid #ECECED;
    div{
        flex:1;
        text-align: center;
        input{
            box-sizing: border-box;
            border:1px solid black;
            width:15vh;

        }
    }
        .item4{
            width:80%;
            height:5vh;
            background:#1AAD19;
            border-radius: 5px;
            line-height: 5vh;
            margin-right:1vh;
            color:white;
        }
    img{
        width:7vh;
        height:7vh;
    }
}

}

</style>