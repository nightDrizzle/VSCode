import VueRouter from 'vue-router'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
import Home from './components/Home.vue'
import User from './components/动态路由匹配.vue'
const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      { path: '/foo', component: Foo },
      { path: '/bar', component: Bar },
      { path: '/user/:id', component: User },
    ],
  },
]
const router = new VueRouter({
  routes,
})
export default router
