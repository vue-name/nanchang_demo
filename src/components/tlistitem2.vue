<template>
  <div class="tlistitem">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      
    >
      <div class="item" v-for="(item,index) in data" :key="index" @click="text_detail(index)">
        <div>{{item.name}}</div>
        <div>{{item.time}}</div>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  name: "tlistitem2",
  props: ["gong_leftData", "gong_rightData", "current"],
  data() {
    return {
      loading: false,
      finished: false
    };
  },
  // created(){
  //     console.log(this.title);

  // },
  computed: {
    data: function() {
      if (this.current == 0) {
        return this.gong_leftData;
      }
      if (this.current == 1) {
        return this.gong_rightData;
      }
    }
  },
  methods: {
    bo_fang() {
      this.$router.push("/bofang");
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          let dataitem = {
            name: "小刚",
            time: "2020-03-05"
          };

          if (this.current == 0) {
            this.gong_leftData.push(dataitem);
          }
          if (this.current == 1) {
            this.gong_rightData.push(dataitem);
          }
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (
          this.gong_rightData.length >= 40 ||
          this.gong_leftData.length >= 40
        ) {
          this.finished = true;
        }
      }, 1000);
    },
    text_detail(index) {
      if (this.current == 0) {
        this.$router.push({
          name: "gong_testdetail",
          params: { id: index }
        });
      }
      if (this.current == 1) {
        this.$router.push({
          name: "gong_testresult",
          params: { id: index }
        });
      }
    }
  }
};
</script>

<style scoped lang='scss'>
.item {
  display: flex;
  border-top: 1vh solid #ebebec;
  // margin-top:1vh;
  width: 100%;
  height: 10vh;
  background: white;
  justify-content: space-between;
  box-sizing: border-box;

  div {
    width: 50%;
    height: 100%;
    box-sizing: content-box;
    text-align: center;
    line-height: 10vh;
  }
}
</style>