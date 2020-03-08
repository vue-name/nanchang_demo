<template>
  <div class="nextlearn">
    <navbar title="学习"></navbar>
    <div class="toast">学费将于。。到期d</div>
    <div class="container" v-for="(item,index) in data" :key="index" @click="go_detail(item)">
      <div class="containeritem1">{{item.name}}</div>
      <div class="containeritem2">
        <div class="left">{{item.Engligh}}</div>
        <div class="right">{{item.pingyin}}</div>
      </div>
    </div>
    <div class="tabbar">
      <div class="jia_item" @click="jia_item">加五个</div>
      <div class="tabbar_item">
        <div class="left" @click="video">观看视频</div>
        <div class="right" @click="go_detailend">交功课</div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
export default {
  name: "nextlearn",
  data() {
    return {
      data: [
        { name: "照相机", Engligh: "camera", pingyin: " zhao xian ji" },
        { name: "照相机", Engligh: "camera", pingyin: " zhao xian ji" },
        { name: "照相机", Engligh: "camera", pingyin: " zhao xian ji" },
        { name: "照相机", Engligh: "camera", pingyin: " zhao xian ji" },
        { name: "照相机", Engligh: "camera", pingyin: " zhao xian ji" }
      ]
    };
  },
  components: {
    navbar
  },
  methods: {
    //加五个
    jia_item() {
      this.$router.push("/learnend");
    },
    //跳到单词详情
    go_detail(item) {
      this.$router.push({
        path: "/detail",
        query: {type:item}
      });
    },
    //进入单词详情页
    go_detailend(){
        this.$router.push('/detailend')
    },
    video(){
        this.$router.push('/video')
    }
  }
};
</script>

<style scoped lang='scss'>
.nextlearn {
  width: 100%;
  height: 100vh;
  background: #ececed;

  .toast {
    text-align: center;
    color: red;
    height: 5vh;
    background: white;
    line-height: 5vh;
  }
  .container {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 13vh;
    background: white;
    .containeritem1 {
      width: 25%;
      height: 5vh;
      background: #b4c0eb;
      text-align: center;
      line-height: 5vh;
    }
    .containeritem2 {
      width: 60%;
      display: flex;
      justify-content: space-between;
      margin-top: 5px;
      div {
        width: 45%;
        text-align: center;
        height: 5vh;
        line-height: 5vh;
      }
      .left {
        background: #cbebb4;
      }
      .right {
        background: #e2e41a;
      }
    }
  }
  .tabbar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .jia_item {
      margin-top: 5px;
      width: 40%;
      height: 5vh;
      border-radius: 5px;
      background: #ad1c19;
      color: white;
      text-align: center;
      line-height: 5vh;
    }
    .tabbar_item {
      display: flex;
      width: 80%;
      justify-content: space-between;
      margin-top: 5px;
      div {
        width: 35%;
        height: 5vh;
        text-align: center;
        line-height: 5vh;
        background: #1aad19;
        border-radius: 5px;
        color: white;
      }
    }
  }
}
</style>