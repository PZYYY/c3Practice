import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import NoticeDemo from '@/views/noticeDemo/NoticeDemo'
import VictoriaIndex from '@/views/victoria/VictoriaIndex'
import AboutUs from '@/views/victoria/AboutUs'
import Show from '@/views/victoria/Show'

Vue.use(Router)

export default new Router({
  routes: [
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
    }
  ]
})
