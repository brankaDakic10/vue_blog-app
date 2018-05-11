<template>
  <div class="container">
      
      <section class="card" style="width: 18rem;">
        <div class="card-body">
           <h3 class="card-title">{{post.title}}</h3>
            <p class="card-text">{{post.text}}</p>
            <p class="card-text">Date:{{post.createdAt | formatDate}}</p>
      </div>
      </section>
      <AddComment :postId="post.id" @commentAdded="addComment"/>
       <section>
           <h6>Comments:</h6>
           <ul v-for="(comment, key) in post.comments"
      :key="key">
      <li>{{comment.text}}</li>
       <p class="card-text">Time:{{comment.createdAt | diffForHumans}}</p>
      </ul>
       </section>
  </div>
</template>
<script>
import AddComment from './AddComment.vue'
import {posts} from '../services/Posts'
import {DateMixin} from '../mixins'
export default {
     components: {
     AddComment
  },
  mixins:[DateMixin]
  ,

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
    },
    methods:{
        addComment(comment){
         this.post.comments.push(comment)
        }
    }
  
}
</script>
