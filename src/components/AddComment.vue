<template>
  <div>
  
    <h5>Add comment</h5>
     <form @submit.prevent="submit">
            
            <div class="form-group">
                <label for="text">Text:</label>
                <textarea id="text" v-model="newComment.text" class="form-control"  placeholder=" Enter comment text " required ></textarea>
             
            </div>
            <div class="form-group">
            <button class="btn btn-success">Submit</button> 
           
            </div>
            
     </form>
   
  </div>
</template>

<script>
import {posts} from '../services/Posts'
export default {
  props:['postId'],
  data(){
      return{
          newComment:{
             
              text:""
          }
      }
    
  },
  methods:{
      submit(){
        posts.addComment(this.newComment,this.postId)
        .then((response)=> {
           
         this.$emit('commentAdded',this.newComment)
           }).catch((error)=>{
            console.log(error)
          
          }) 
      }
  }
}
</script>

<style>

</style>
