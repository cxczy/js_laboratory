import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/page/Index'
import P1 from '@/components/page/p1'
import P2 from '@/components/page/p2'
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
    },
    {
      path: '/p2',
      name: 'p2',
      component: P2
    }
  ]
})
