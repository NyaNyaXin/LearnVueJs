import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '@/components/Params'
import Hi1 from '@/components/Hi1'
import Error from '@/components/Error'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
      alias: '/home1'
    },
    {
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: Params
    },
    {
      path: '/gohome',
      redirect: '/'
    },
    {
      path: '/goparams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    },
    {
      path: '/hi1',
      component: Hi1,
      alias: '/chenxin'
    },
    {
      path: '*',
      component: Error
    }

  ]
})
