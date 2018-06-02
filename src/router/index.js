import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import NoticeDemo from '@/views/noticeDemo/NoticeDemo' // 公告播放小demo
import VictoriaIndex from '@/views/victoria/VictoriaIndex' // 维密首页
import AboutUs from '@/views/victoria/AboutUs' // 关于我们
import Show from '@/views/victoria/Show' // 围观维密
import Honor from '@/views/victoria/Honor' // 荣誉
import Connection from '@/views/victoria/Connection' // 联系我们
import Consult from '@/views/victoria/Consult' // 在线咨询

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/victoriaIndex'
    },
    {
      path: '/NoticeDemo',
      name: 'NoticeDemo',
      component: NoticeDemo
    },
    {
      path: '/victoriaIndex',
      name: 'VictoriaIndex',
      component: VictoriaIndex
    },
    {
      path: '/aboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/show',
      name: 'Show',
      component: Show
    },
    {
      path: '/honor',
      name: 'Honor',
      component: Honor
    },
    {
      path: '/connection',
      name: 'Connection',
      component: Connection
    },
    {
      path: '/consult',
      name: 'Consult',
      component: Consult
    }
  ]
})
