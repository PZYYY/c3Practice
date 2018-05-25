import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NoticeDemo from '@/views/noticeDemo/NoticeDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/NoticeDemo',
      name: 'NoticeDemo',
      component: NoticeDemo
    }
  ]
})
