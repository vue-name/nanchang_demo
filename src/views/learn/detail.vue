<template>
  <div class="detail">
    <navbar title="功课"></navbar>

 <onload></onload>
    <div class="detail_item2">
        <div class="mian_ban">
                {{data.name}}
        </div>
    </div>
     <div class="Test_item2">
      <div class="tab1_item">还剩5秒自动切换到下一个单词</div>
      <div class="tab2_item">开始录音</div>

      <div style="color:red;" @click="ending">假设测完</div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import onload from "@/components/onload";
export default {
  name: "detail",
  data() {
    return {
      data: []
    };
  },
  components: {
    navbar,
    onload
  },
  //获取detail数据
  created() {
    this.data = this.$route.query.type;
  },
  methods:{
    //进入学习结束页面
      ending(){
          this.$router.push('/detailend')
      }
  }

};
</script>

<style scoped lang='scss'>
.detail {
  width: 100%;
  height: 100vh;
  background: #ececed;
  position:relative;
  .detail_item2{
      margin-top:20px;
      display:flex; 
       width:100;
           height:50vh;
           background:white;
           justify-content: center;
           align-items: center;

      .mian_ban{
          text-align: center;
          line-height:20vh;
           width:20vh;
           height:20vh;
           background:#B4C0EB;
      }
  }
  .Test_item2 {
    border-radius: 10px;
    width: 100%;
    height: 20vh;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom:0px;
    .tab1_item {
      text-align: center;
    }
    .tab2_item {
      margin-top: 10px;
      text-align: center;
      width: 10vh;
      height: 10vh;
      border-radius: 50%;
      background: #f4d84a;
      line-height: 10vh;
      font-size:10%;
    }
  }
}
</style>