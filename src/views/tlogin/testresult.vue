<template>
<div class="testresult">
    <navbar title="学生测试结果"></navbar>
     <div class="pancel">
      <div class="pancel_item">
        <img src="~@/assets/img/truegou.png" alt />
        <div class="text">恭喜等级一测试通过！</div>
      </div>
      <div class="pancel_item2">
        <div class="pancel_item3">
          <span>总共单词:</span>
          <span>正确:</span>
          <span>错误:</span>
          <span>正确率:</span>
        </div>
        <div class="pancel_item4">
          <span>150个</span>
          <span>140个</span>
          <span>10个</span>
          <span>93%</span>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import navbar from "@/components/navbar"
export default {
name:'testresult',
components:{
    navbar
}
}
</script>

<style scoped lang='scss'>
.testresult{
    width:100%;
    height:100vh;
    background:#ECECED;
}
.pancel {

    width: 100%;
    // height:200px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;

    .pancel_item2 {
      display: flex;
      font-size: 1.2rem;
      .pancel_item3 {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 5px;
        span {
          margin-top: 10px;
        }
      }
      .pancel_item4 {
        display: flex;
        flex-direction: column;
        span {
          margin-top: 10px;
        }
      }
    }
  }

</style>