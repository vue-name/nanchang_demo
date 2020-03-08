<template>
<div class="tworking">
    <navbar title="测试">

    </navbar>
    <div class="working">
        <div class="workingitem" @click="testgrade">
            测试列表
        </div>
        <div class="workingitem2" @click ="gong_neng">
            功能列表
        </div>
    </div>
</div>
</template>

<script>
import navbar from "@/components/navbar"
export default {
name:'tworking',
methods:{
    //跳到测试页面
    testgrade(){
        this.$router.push({
            name:"testline",
            params:{title:"测试列表"}
        })
    },
    //跳到功能页面
    gong_neng(){
        this.$router.push({
            name:'testline',
             params:{title:"功能列表"}
            })
    }
    // testgrade(){
    //     this.$router.push('/testline')
    // }
},
components:{
   navbar
   }
}
</script>

<style scoped lang='scss'>
.working{
    position:absolute;
    height:25vh;
    top:30vh;
    left:50%;
    transform: translate(-50%,0);
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    div{
        width:30vh;
        height:7vh;
        background:#1AAD19;
        border-radius: 10px;
        text-align: center;
        line-height: 7vh;
        color:white;

    }
  

}


</style>