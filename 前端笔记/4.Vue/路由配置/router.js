import VueRouter from 'vue-router'
import foo from './components/Foo.vue'
import bar from './components/Bar.vue'
import home from './components/Home.vue'
import user from './components/动态路由匹配.vue'
const routes = [
  {
    path: '/home',
    component: home,
    children: [
      { path: '/foo', component: foo },
      { path: '/bar', component: bar },
      { path: '/user/:id', component: user }
    ]
  },

]
const router = new VueRouter({
  routes
})
export default router