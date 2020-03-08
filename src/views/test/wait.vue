<template>
<div class="test">

    <navbar title="测试"></navbar>
  <div class="pancel">
        <img src="~@/assets/img/icon.png" alt="">
        <div class="text">完成等级一测试，请等待老师的评判结果。。。</div>
  </div>
 
   
</div>

</template>

<script>
import navbar from '@/components/navbar'
export default {
name:'wait',
data(){
    return{
        resultitem:true
    }
},
components:{
    navbar
},
created(){
    this.go_jump()
},
methods:{
 
    //模拟跳转进入测试结果页面
    go_jump(){
        setTimeout(() => {
            if(this.resultitem){
                this.$router.push({
                    name:'result',
                    params:'/result/'+this.resultitem
                })
            }
            if(this.resultitem){
                this.$router.push({
                    name:'result',
                    params:{bool:this.resultitem}
                })
            }
        }, 3000);    
    }
}
}
</script>

<style scoped lang='scss'>
.test{
    overflow: hidden;
    width:100%;
    height:100vh;
    background:#ECECED;
    .pancel{
        width:100%;
        height:200px;
        background:white;
        display:flex;
        align-items: center;
        justify-content: space-around;
        padding:20px;
        box-sizing: border-box;
        border-radius: 10px;
   
       
        height:200px;

    .text{
        width:60%;
        font-size: 1.3rem;

    }
    img{
        width:50px;
        height:50px;
    }
    }
  
    .btn{
        margin-top:50px;
        display:flex;
        justify-content: center;
        .btnitem{
            width:30%;
            height:40px;
            font-size: 1.2rem;
            text-align: center;
            background:#1AAD19;
            line-height: 40px;
            border-radius: 10px;
            color:white;
        }
     }
    }



</style>