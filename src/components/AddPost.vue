<template>
  <div class="container">
   <article class="col-8">
    <h4>Add new post</h4>
     <form @submit.prevent="submit">
            <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" id="title" v-model="newPost.title" class="form-control"  placeholder=" Enter blog title " >
            </div>
            <div class="form-group">
                <label for="text">Text:</label>
                <input type="text" id="text" v-model="newPost.text" class="form-control"  placeholder=" Enter blog text " >
            </div>
            <div class="form-group">
            <button class="btn btn-success">Submit</button> 
            <button class="btn btn-info" type="reset">Reset</button> 
            </div>
            
     </form>
    </article>
  </div>
</template>

<script>
import {posts} from '../services/Posts'
export default {
   
   data(){
     return{
       newPost:{
         title:"",
         text:""
       }
     }
   },
   methods:{
     submit(){
       posts.add(this.newPost)
        .then((response)=> {
           this.$router.push('/posts')
           }).catch((error)=>{
            console.log(error)
          
          }) 
     }
   }
}
</script>

<style>

</style>
