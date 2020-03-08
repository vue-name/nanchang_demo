<template>
<div class="home">
<van-nav-bar  
   class="navbar"
  title="欢迎使用中文学习平台"

/>
<div class="button_group">
    <div class="btn" @click="go_item1()">免费测试</div>
    <div class="btn" @click="go_item2()">在线学习</div>
    <div class="btn" @click="go_item3()">学生登陆</div>
    <div class="btn" @click="go_item4()">教师登陆</div>
</div>
</div>
</template>

<script>
export default {
name:'home',
data(){
    return{
    }
},
methods:{
    go_item1(){
        this.$router.push('/test')
    },
    go_item2(){
        this.$router.push('/learn')
    },
    go_item3(){
        this.$router.push('/slogin')
    },
    go_item4(){
        this.$router.push('/tlogin')
    },
}
}
</script>

<style scoped  lang="scss">
.home{
    overflow: hidden;
    width:100%;
    height:100vh;
    background:#C4E3E0;
}
.navbar{
    background:rgb(57, 182, 94);
    // margin-top:10px;
    


}
   .van-nav-bar__title{
       color:white;
       
   }
   .button_group{
       position: absolute;
       margin-top:100px;
       display:flex;
       box-sizing: border-box;
       width:100%;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       .btn{
           height:35px;
           margin-top:40px;
           width:40%;
           background:#1AAD19;
           text-align: center;
           line-height: 35px;
           border-radius: 5px;
           color:white;

           
       }
   }
</style>