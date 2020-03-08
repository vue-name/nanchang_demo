<template>
<div class="test">

    <navbar title="测试"></navbar>
  <div class="pancel">
      <div class="pancel_item">
        <img src="~@/assets/img/truegou.png" alt="">
        <div class="text">恭喜你，等级一测试通过！</div>
      </div>
     
  </div>
    <div class="btn">
      <div class="btnitem" @click="go_next" >
          开始下级学习
      </div>
    </div>
   
</div>

</template>

<script>
import navbar from '@/components/navbar'
export default {
name:'result',
components:{
    navbar
},
methods:{
   //下一级学习
   go_next(){
       this.$router.push('/nextLearn')
   }
   }
}
</script>

<style scoped lang='scss'>
.test{
    overflow: hidden;
    width:100%;
    height:100vh;
    background:#ECECED;
    .pancel{
        width:100%;
        // height:200px;
        background:white;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding:20px;
        box-sizing: border-box;
        border-radius: 10px;
   
       
        .pancel_item2{
           display:flex;
           font-size:1.2rem;
        .pancel_item3{
            display:flex;
            flex-direction: column;
            align-items: flex-end;
            margin-right:5px;
            span{
                margin-top:10px;
            }
        }
        .pancel_item4{
              display:flex;
            flex-direction: column;
             span{
                margin-top:10px;
            }
        }
        }
        }
        .pancel_item{
                width:100%;
        height:100%;
        background:white;
        display:flex;
        align-items: center;
        justify-content: space-around;
        padding:20px;
        box-sizing: border-box;
        border-radius: 10px;

    .text{
        width:60%;
        font-size: 1.3rem;

    }
    img{
        width:50px;
        height:50px;
    }
        }

    }
  
    .btn{
        margin-top:50px;
        display:flex;
        justify-content: center;
        .btnitem{
            width:45%;
            height:40px;
            font-size: 1.2rem;
            text-align: center;
            background:#1AAD19;
            line-height: 40px;
            border-radius: 10px;
            color:white;
        }
     }



</style>