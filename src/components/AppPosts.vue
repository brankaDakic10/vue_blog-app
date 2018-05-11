<template>
 <div class="container">
      

<div class="card" style="width: 18rem;" v-for="(post, key) in posts"
      :key="key">
  
  <div class="card-body">
    <h3 class="card-title">{{post.title}}</h3>
    

    <router-link :to="{ name: 'single-post', params: { id: post.id }}"
      exact-active-class="active" >View Post</router-link>
    <router-link tag="button" class="btn btn-primary"
    :to="{ name: 'edit-post', params: { id: post.id }}"
      exact-active-class="active" >Edit </router-link>
   
  </div>
</div>

</div>

</template>
<script>
import {posts} from '../services/Posts'

export default {
    data(){
      return{
         posts:[]
      }
    },
     created() {
      posts.getAll()
          .then((response)=> {
            this.posts=response.data
             console.log(this.posts)
         }).catch((error)=> {
            console.log(error)
         })  
  
   
  }
}
</script>
<style>

</style>

