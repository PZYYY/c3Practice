import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import NoticeDemo from '@/views/noticeDemo/NoticeDemo'
import VictoriaIndex from '@/views/victoria/VictoriaIndex'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '*',
      redirect: '/victoriaIndex'
    },
    {
      path: '/',
      name: 'NoticeDemo',
      component: NoticeDemo
    },
    {
      path: '/victoriaIndex',
      name: 'VictoriaIndex',
      component: VictoriaIndex
    }
  ]
})
