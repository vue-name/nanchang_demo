<template>
  <div class="Tlogin">
      <navbar title="教师登陆"></navbar>
    <div class="Tloginitem">
      <div class="Tloginitem_1">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="email"
            label="邮箱"
            placeholder="邮箱"
            :rules="[{ required: true, message: '请填写邮箱' }]"
            class="input"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
            class="input"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit" class="input btn" @click="tlogin">登陆</van-button>
          </div>
        </van-form>
      </div>
    </div>
            
  </div>
</template>

<script>
import navbar from '@/components/navbar'
export default {
  name: "tlogin",
  props:['studen_show'],
  data() {
    return {
      username: "",
      password: ""
    };
  },
  components:{
navbar
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    
    //跳转到教师功能页
    tlogin(){
      this.$router.push('/tworking')
    }
      }
};
</script>


<style scoped lang='scss'>
.Tlogin{
  box-sizing: border-box;
}
.Tloginitem {
  margin-top: 100px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  .input {
    border-radius: 10px;
  }
  .btn {
    background: #1AAD19;
    border: none;
  }
}
  .zhu_ce {
float:right;
margin-right:10px;
   }
</style>