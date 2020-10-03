<template>
  <div class="jobdetails container">
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
            <li><router-link to="/job">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
          
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <router-link to="/">Back</router-link>
    <h1 class="page-header">{{job.job_title}} 
        <span class="pull-right">
            <router-link class="btn btn-primary" v-on:click="applyjob(job.id)">Apply</router-link>
            </span>
    </h1>
            <ul class="list-group">
            <li class="list-group-item"> {{job.profile_description}}</li>
            <li class="list-group-item">{{job.category}}</li>
            <li class="list-group-item">{{job.package}}</li>
            <li class="list-group-item">{{job.required_skills}}</li>
            <li class="list-group-item">{{job.posted_date}}</li>
        </ul>
  </div>
</template>

<script>
export default {
  name: 'jobdetails',
  data () {
    return {
      job: ''
    }
  },
  methods:{
      fetchjob(id){
          this.$http.get('http://localhost:8000/jobs/'+id)
          .then(function(response){
            this.job = response.body;
          });
      },
      applyjob(id){
          this.$http.delete('http://localhost:8000/jobs/'+id+"/apply")
          .then(function(response){
            this.$router.push({path: '/job', query: {alert: 'job Applied'}});
          });
      }
  },
  created: function(){
      this.fetchjob(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
