<template>
  <div class="testline">
    <navbar :title="$route.params.title" class="navbar"></navbar>
    <div>
      <div class="navbar_item">
        <div class="navbar_item1" 
        v-for="(item,index) in Data" :key="index" 
        @click="active(index)"
        :class="{'active':index==current}" >{{item.nav}}</div>
      </div>
        <div class="list">
          <div class="list_item"></div>
        </div>
      </div>
      <listItem1  :leftData="leftData" 
      :rightData="rightData" 
      :current="current" 
       ref="listitem"
       v-if='$route.params.title=="测试列表"'
 
       :title="$route.params.title"
      ></listItem1>
      <listItem2 
         v-if='$route.params.title=="功能列表"'
      :gong_leftData="gong_leftData"
      :gong_rightData="gong_rightData"
      :current ="current"
       ref="listitem2"
    
      ></listItem2>
    </div>

</template>

<script>
import listItem1 from '@/components/tlistitem'
import listItem2 from '@/components/tlistitem2'
import navbar from "@/components/navbar";
export default {
  name: "testline",
  data() {
    return {
      Title:'',
      Data: [
          {nav:'待评判'},
          {nav:'已评判'},

      ],
      leftData:[
          {name:'张三等级一测试',time:'2020-02-23'},
          {name:'李四等级一测试',time:'2020-02-23'},
          {name:'王五等级一测试',time:'2020-02-23'},
      ],
      gong_leftData:[
          {name:'张三等级一功能',time:'2020-02-23'},
          {name:'李四等级一功能',time:'2020-02-23'},
          {name:'王五等级一功能',time:'2020-02-23'},
      ],
    
      rightData:[
          {name:'赵六等级一测试',time:'2020-02-23'},
          {name:'小明等级一测试',time:'2020-02-23'},
          {name:'小红等级一测试',time:'2020-02-23'},
      ],
      gong_rightData:[
          {name:'赵六等级一功能',time:'2020-02-23'},
          {name:'小明等级一功能',time:'2020-02-23'},
          {name:'小红等级一功能',time:'2020-02-23'},
      ],
     
      
      current:0

    }
  },
  components: {
    navbar,
    listItem1,
    listItem2
  },
  //进入页面 使navbar index 等于0
  created(){
    this.current=0
    console.log(this.current);
    
  },
  methods:{
    //切换 功能 和 测试 详情列表
      active(index){
          this.current=index

            if(index==1){
              if( this.$route.params.title=="测试列表"){

                this.$refs.listitem.onLoad()
              }
              if(this.$route.params.title=="功能列表"){
                this.$refs.listitem2.onLoad()
              }
          }

 
  },
  //   beforeRouteEnter(to,from, next){
  //   next(vm=>{

  //     this.Title=vm.$route.params.title
  //   })
  // },
}
}
</script>

<style scoped lang='scss'>
.testline {
  width: 100%;
  height: 100%;
  
  .navbar_item {
    display: flex;
    width: 100%;
    margin-top:46px;

    div {
      flex: 1;
      width: 50%;
      height: 7vh;
      box-sizing: border-box;
      line-height: 7vh;
      text-align: center;
      background: white;
    }
    .active {
      background: #f0f2f5;
    }
  }
}
  .navbar{
       position:fixed;
      left:0px;
      right:0px;
      top:0px;
    }
</style>