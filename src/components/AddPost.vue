<template>
  <div class="container">
   <article class="col-8">
    <h3>{{ this.$route.params.id ? 'Edit contact' : 'Add new contact'}}</h3>
     <form @submit.prevent="submit">
            <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" id="title" v-model="newPost.title" class="form-control"  placeholder=" Enter blog title " minlength="2"  required >
            </div>
            <div class="form-group">
                <label for="text">Text:</label>
                <input type="text" id="text" v-model="newPost.text" class="form-control"  placeholder=" Enter blog text " maxlength="300" required >
            </div>
            <div class="form-group">
            <button class="btn btn-success">Submit</button> 
            <button class="btn btn-info" type="reset" @reset="resetForm">Reset</button> 
            </div>
            
     </form>
    </article>
  </div>
</template>

<script>
import {posts} from '../services/Posts'
export default {
  created(){
     if(this.$route.params.id){
        posts.get(this.$route.params.id)
        .then((response) => {
            this.newPost=response.data
           
        }).catch((error) => {
            console.log(error)
        })
      }
  },
   
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
        
          if(this.$route.params.id)
          {
            posts.edit(this.$route.params.id, this.newPost)
           .then((response)=> {
          
            this.$router.push({name: 'all-posts'})
          }).catch((error)=>{
            console.log('Edit: '+ error)
         })  
          
          }
          else
          {
           posts.add(this.newPost)
             .then((response)=> {
           
             this.$router.push({name: 'all-posts'})
           }).catch((error)=>{
            console.log(error)
          
          }) 
          }
     },
     resetForm(){
        this.newPost = {}
    
   }
  }
}
</script>

<style>

</style>
