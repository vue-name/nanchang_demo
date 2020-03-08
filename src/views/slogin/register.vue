<template>
  <div class="Tlogin">
      <navbar title="注册"></navbar>
    <div class="Tloginitem">
      <div class="Tloginitem_1">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="username"
            label="学生名"
            placeholder="学生名"
            :rules="[{ required: true, message: '请填写名字' }]"
            class="input"
          />
          <van-field
            v-model="num"
            name="num"
            label="父母手机号"
            placeholder="父母手机号"
            :rules="[{ required: true, message: '请填写父母手机号' }]"
            class="input"
          />
          <van-field
            v-model="email"
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
            <van-button round block type="info" native-type="submit" class="input btn">注册</van-button>
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
      email:'',
      username: "",
      password: "",
      num:''

    };
  },
  components:{
navbar
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    register(){
      this.$router.push('/register')
    }
  }
};
</script>


<style scoped lang='scss'>
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