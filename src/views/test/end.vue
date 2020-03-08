<template>
<div class="test">

    <navbar title="测试"></navbar>
  <div class="pancel">
        <img src="~@/assets/img/icon.png" alt="">
        <div class="text">完成等级一测试，提交本次测试给教师评判</div>
  
  </div>
    <div class="btn">
      <div class="btnitem" @click="geton" >
          提交测试
      </div>
    </div>
   
</div>

</template>

<script>
import navbar from '@/components/navbar'
export default {
name:'end',
components:{
    navbar
},
methods:{
    //模拟进入等待页面
    geton(){
        this.$router.push('/wait')
    },
 
}
}
</script>

<style scoped lang='scss'>
.test{
    overflow: hidden;
    width:100%;
    height:100vh;
    background:#ECECED;
    box-sizing: border-box;
    .pancel{
        width:100%;
        height:200px;
        background:white;
        display:flex;
        align-items: center;
        justify-content: space-around;
        padding:20px;
        box-sizing: border-box;
        border-radius: 10px;
   
       
        height:200px;

    .text{
        width:60%;
        font-size: 1.3rem;

    }
    img{
        width:50px;
        height:50px;
    }
    }
  
    .btn{
        margin-top:50px;
        display:flex;
        justify-content: center;
        .btnitem{
            width:30%;
            height:40px;
            font-size: 1.2rem;
            text-align: center;
            background:#1AAD19;
            line-height: 40px;
            border-radius: 10px;
            color:white;
        }
     }
    }



</style>