import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/page/Index'
import P1 from '@/components/page/p1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/p1',
      name: 'p1',
      component: P1
    }
  ]
})
