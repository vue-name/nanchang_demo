<template>
  <div class="video">
    <navbar title="视频" class="navbar"></navbar>

    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" >
      <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
      <div class="video_item" v-for="(item,index) in data" :key="index" @click="bo_fang">
        <div>
          <img src="~@/assets/img/videoimg.png" alt />
        </div>
        <div class="item">{{item.text}}</div>
      </div>
    </van-list>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
export default {
  name: "videoitem",
  data() {
    return {
        //模拟数据
      data: [
        { img: "~@/assets/img/videoimg.png", text: "抓住机遇" },
        { img: "~@/assets/img/videoimg.png", text: "抓住机遇" },
        { img: "~@/assets/img/videoimg.png", text: "抓住机遇" },
        { img: "~@/assets/img/videoimg.png", text: "抓住机遇" },
        { img: "~@/assets/img/videoimg.png", text: "抓住机遇" },
        { img: "~@/assets/img/videoimg.png", text: "抓住机遇" },
        { img: "~@/assets/img/videoimg.png", text: "抓住机遇" },
        { img: "~@/assets/img/videoimg.png", text: "抓住机遇" },
        { img: "~@/assets/img/videoimg.png", text: "抓住机遇" },
        { img: "~@/assets/img/videoimg.png", text: "抓住机遇" },
        { img: "~@/assets/img/videoimg.png", text: "抓住机遇" }
      ],
      list: [],
      loading: false,
      finished: false
    };
  },
  components: {
    navbar,
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          let dataitem = {
            img: "~@/assets/img/videoimg.png",
            text: "抓住机遇"
          };
          this.data.push(dataitem);
        }

        // 加载状态结束
        this.loading = false;
        console.log(this.data.length);

        // 数据全部加载完成
        if (this.data.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    bo_fang(){
        this.$router.push('/bofang')
    }
  }
};
</script>

<style scoped lang='scss'>
.video {
margin-top:46px;
  width: 100%;
  height: 100%;
  background: #ececed;
  .video_item {
    box-sizing: border-box;
    padding: 1vh;
    margin-top: 2vh;
    display: flex;
    width: 100%;
    height: 15vh;
    background: white;
    justify-content: space-between;
    align-items: center;
    .item {
      width: 70%;
      height: 90%;
    }
  }
}
 .navbar{
        position:fixed;
        left:0px;
        right:0px;
        top:0px;

        // top:0px;
    }
</style>