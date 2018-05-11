<template>
  <div class="container">
      
      <section class="card" style="width: 18rem;">
        <div class="card-body">
           <h5 class="card-title">{{post.title}}</h5>
            <p class="card-text">{{post.text}}</p>
      </div>
      </section>
  </div>
</template>
<script>
import {posts} from '../services/Posts'
export default {
     created() {
        if(this.$route.params.id){
        posts.get(this.$route.params.id)
        .then((response) => {
            this.post=response.data
           
        }).catch((error) => {
            console.log(error)
        })
      }
        
    },
    data(){
        return{
            post:{}
        }
    }
  
}
</script>
