import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home'
import register from '@/views/slogin/register'
import tlogin from '@/views/tlogin/tlogin'
import tworking from '@/views/tlogin/tworking'
import slogin from '@/views/slogin/slogin'
import test from '@/views/test/test'
import starTest from '@/views/test/starTest'
import end from '@/views/test/end'
import wait from '@/views/test/wait'
import learn from '@/views/learn/learn'
import learnend from '@/views/learn/learnend'
import nextLearn from '@/views/learn/nextLearn'
import detail from '@/views/learn/detail'
import detailend from '@/views/learn/detailend'
import videoitem from '@/views/learn/videoitem'
import bofang from '@/views/learn/bofang'
import result from '@/views/test/result'
import testline from '@/views/tlogin/testline'
import jiaofei from '@/views/slogin/jiaofei'
import testdetail from '@/views/tlogin/testdetail'
import testresult from '@/views/tlogin/testresult'
import gong_testresult from '@/views/tlogin/gongtestresult'
import gong_testdetail from '@/views/tlogin/gongtestdetail'

Vue.use(VueRouter)

const routes = [
   {path:'/',redirect:"/home"},
   {path:'/home',name:'home',component:home},
   {path:'/register',name:'register',component:register},
   {path:'/slogin',name:'slogin',component:slogin},
   {path:'/tlogin',name:'tlogin',component:tlogin},
   {path:'/test',name:'test',component:test},
   {path:'/learn',name:'learn',component:learn},
   {path:'/starTest',name:'starTest',component:starTest},
   {path:'/end',name:'end',component:end},
   {path:'/wait',name:'wait',component:wait},
   {path:'/nextLearn',name:'nextLearn',component:nextLearn},
   {path:'/result/:bool',name:'result',component:result},
   {path:'/learnend',name:'learnend',component:learnend},
   {path:'/detail',name:'detail',component:detail},
   {path:'/detailend',name:'detailend',component:detailend},
   {path:'/video',name:'videoitem',component:videoitem},
   {path:'/bofang',name:'bofang',component:bofang},
   {path:'/tworking',name:'tworking',component:tworking},
   {path:'/testline/:title',name:'testline',component:testline},
   {path:'/testdetail/:id',name:'testdetail',component:testdetail},
   {path:'/testresult/:id',name:'testresult',component:testresult},
   {path:'/gong_testdetail/:id',name:'gong_testdetail',component:gong_testdetail},
   {path:'/gong_testresult/:id',name:'gong_testresult',component:gong_testresult},
   {path:'/jiaofei',name:'jiaofei',component:jiaofei},

]
const router = new VueRouter({
  routes
})
export default router
