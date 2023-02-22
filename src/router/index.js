import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Login from '../components/Login.vue'

const routes = [
  {
    name: 'Login',
    path: '/login',
    meta: {
      title: '登录'
    },
    component: Login
  },
  {
    name: 'home',
    path: '/',
    component: Home,
    meta: {
      title: '首页'
    },
    redirect: '/l',
    children: [
      {
        name: 'HelloWorld',
        path: '/he',
        component: HelloWorld
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
