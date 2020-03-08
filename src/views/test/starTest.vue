<template>
  <div class="starTest">
    <navbar title="测试"></navbar>
    <div class="Test_item1">
      <div class="text">当前等级已测试10个单词</div>
      <div class="text_card">图片</div>
    </div>
    <div class="Test_item2">
      <div class="tab1_item">还剩5秒自动切换到下一个单词</div>
      <div class="tab2_item">开始录音</div>

      <div style="color:red;" @click="ending">点我测试完</div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
export default {
  name: "starTest",
  components: {
    navbar
  },
  methods: {
    //进入测试结束页面
    ending() {
      this.$router.push("/end");
    }
  }
};
</script>

<style scoped lang='scss'>
.starTest {
  width: 100%;
  height: 100vh;
  background: #ececed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .Test_item1 {
    width: 100%;
    height: 40vh;
    background: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .text_card {
      width: 20vh;
      height: 20vh;
      background: #ececed;
    }
    .text {
      margin-bottom: 10vh;
      font-size: 1.3rem;
    }
  }
  .Test_item2 {
    border-radius: 10px;
    width: 100%;
    height: 25vh;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .tab1_item {
      text-align: center;
      font-size:10%;

    }
    .tab2_item {
        font-size:10%;
      margin-top: 5vh;
      text-align: center;
      width: 12vh;
      height: 12vh;
      border-radius: 50%;
      background: #f4d84a;
      line-height: 12vh;
    }
  }
}
</style>