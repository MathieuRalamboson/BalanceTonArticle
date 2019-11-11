import Vue from 'vue'
import Router from 'vue-router'

// Page content
import ToDo from './components/ToDo'
import View from './components/View'

// Fallback page
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: ToDo
    },
    {
      path: '/page-1',
      name: 'Page View',
      params: 'admin',
      component: View
    },
    {
      path: '/page-2',
      name: 'Admin',
      component: PageNotFound
    }
  ]
})
