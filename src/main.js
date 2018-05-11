import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AppPosts from './components/AppPosts.vue'


Vue.config.productionTip = false

Vue.use(VueRouter)



const routes = [
  { path: '/', redirect: '/posts' },
  { path: '/posts', component: AppPosts, name: 'all-posts' },
  
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')