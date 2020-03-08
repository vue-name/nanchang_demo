<template>
<div class="learnend">
    <navbar title="学习"></navbar>
    <div class="toast">学费将于。。到期d</div>
    <div class="end_item">
        <span>
       单词已经学完
            </span> 
    </div>
     <div  class="tabbar">
        <div class="jia_item" >
           已学50个
        </div>
        <div class="tabbar_item">
            <div class="left" @click="video">观看视频</div>
            <div class="right" @click="go_detailend">交功课</div>
        </div>
    </div>
     
</div>
</template>

<script>
import navbar from '@/components/navbar'
export default {
name:'learnend',
components:{
    navbar
},
methods:{
    //跳到结束页面
    go_detailend(){
        this.$router.push('/detailend')
    },
    //进入视频播放页面
    video(){
        this.$router.push('/video')
    }

}
}
</script>

<style scoped lang='scss'>
   .learnend{
       width:100%;
       height:100vh;
       background:#ECECED;
  .toast {
    text-align: center;
    color: red;
    height: 5vh;
    background: white;
    line-height: 5vh;
    margin-bottom:10px;
  }
  .end_item{
      width:100%;
      height:60vh;
      background:white;
      display:flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      
  }
  .tabbar{
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .jia_item{
          margin-top:5px;
         width:40%;
         height:5vh;
         border-radius: 5px;
         color:rgb(240, 18, 18);
         text-align: center;
         line-height: 5vh;
      }
      .tabbar_item{
          display:flex;
          width:80%;
          justify-content: space-between;
          margin-top:5px;
        div{
            
           width:35%;
           height:40px;
           text-align: center;
           line-height: 40px;
           background:#1AAD19;
           border-radius: 5px;
           color:white;
        }
      }

  }
   }

</style>