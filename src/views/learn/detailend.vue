<template>
  <div class="detailend">
      <navbar title=功课></navbar>
      <onload></onload>
  <div class="pancel">
        <img src="~@/assets/img/icon.png" alt="">
        <div class="text">完成今日功课，提交教师评判</div>
  
  </div>
    <div class="btn">
      <div class="btnitem"  >
          提交功课
      </div>
    </div>
    <div class="error">
        <div  class="text_item1">
             错误
        </div>
        <div class="text_item2">
             请上传今日录音
        </div>

        <div class="text_item3">
             确定
        </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar"
import onload from "@/components/onload";
export default {
  name: "detailend",
  components:{
      navbar,
      onload
  }
};
</script>

<style scoped lang='scss'>

.detailend{
    width:100%;
    height:100vh;
    background:#ECECED;
 .pancel{
     margin-top:10px;
        width:100%;
        height:30vh;
        background:white;
        display:flex;
        align-items: center;
        justify-content: space-around;
        padding:2vh;
        box-sizing: border-box;
        border-radius: 10px;
   
       
        height:200px;

    .text{
        width:60%;
        font-size:120%;

    }
    img{
        width:50px;
        height:50px;
    }
    }
  
    .btn{
        margin-top:5vh;
        display:flex;
        justify-content: center;
        .btnitem{
            width:30%;
            height:5vh;
            font-size: 1.2rem;
            text-align: center;
            background:#1AAD19;
            line-height: 5vh;
            border-radius: 10px;
            color:white;
        }
     }
     .error{
         position: absolute;
         bottom:5vh;
         left:50%;
         transform: translate(-50%,0);
         width:80%;
         height:25vh;
         align-items: center;
         justify-content: center;
         background:white;
         display:flex;
         flex-direction: column;
         justify-content: space-around;
         .text_item1{
             font-size:1.3rem;
             font-weight:700;
         }
         .text_item2{
             margin-top:-5vh;
             font-size:0.8rem;
             color:rgb(189, 189, 194);
         }
           .text_item3{
             font-size:1.2rem;
             font-weight:700;
             color:red;
         }

     }
  }
</style>