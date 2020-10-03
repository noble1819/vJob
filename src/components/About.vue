<template>
  <div class="about container">
      <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">Job Portal</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
          
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <h1 class="page-header">About</h1>
    <p>This is a Job Portal app built with the Vue.js framework</p>
    <p>Version 1.0.0</p>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
