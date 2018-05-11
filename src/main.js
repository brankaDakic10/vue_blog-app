import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AppPosts from './components/AppPosts.vue'
import SinglePost from './components/SinglePost.vue'
import AddPost from './components/AddPost.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)



const routes = [
  { path: '/', redirect: '/posts' },
  { path: '/posts', component: AppPosts, name: 'all-posts' },
  { path: '/post/:id', component: SinglePost, name: 'single-post' },
  { path: '/add', component: AddPost, name: 'add-post' },
  { path: '/edit/:id', component: AddPost, name: 'edit-post' }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')