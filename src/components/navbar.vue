<template>
<div class="navbar">
       <van-nav-bar  
   class="navbaritem"
  :title="title"
   left-arrow
   @click-left="$router.go(-1)"
/>

</div>
</template>

<script>
export default {
name:'',
props:['title']
}
</script>

<style scoped lang='scss'>
.navbaritem{
    box-sizing: border-box;
    // margin-top:10px;
    background:#39B65E;
.van-nav-bar__title{
    color:white;
}
      .van-icon-arrow-left::before{
               content: "\F008返回";
               color:white;
      }
}

</style>