<template>
<div>
 <nav class="navbar navbar-expand-lg navbar-dark  nav-style">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <router-link class="navbar-brand" to="/">Blog App</router-link>
    
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <router-link class="nav-item nav-link" :to="{ name:'all-posts'}">Posts</router-link>
      </li>
      <li class="nav-item">
         <router-link class="nav-item nav-link" :to="{ name:'add-post'}">Add</router-link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</div>
</template>
<script>


export default {

};
</script>
<style scoped>
.nav-style{
    background-color: rgb(33, 81, 165);
}
</style>
