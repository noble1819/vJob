<template>
  <div class="jobs container">
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
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header">Manage Jobs</h1>
      
    <br />
    <table class="table table-striped">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Profile Description</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="job in jobs">
            <td>{{job.job_title}}</td>
            <td>{{job.profile_description}}</td>
            <td>{{job.category}}</td>
            <td><router-link class="btn btn-default" v-bind:to="'/job/'+job.id">View</router-link></td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
 import Alert from './Alert'
  export default {
    name: 'jobs',
    data () {
      return {
        jobs: [],
        alert:'',
        filterInput:''
      }
    },
    methods: {
      fetchjobs(){
        this.$http.get('http://localhost:8000/jobs')
          .then(function(response){
            if(response.status==200)
            this.jobs = response.body;
            else{
                this.alert = 'Sorry we are facing some issues';
            }
          });
      },
      
    },
    created: function(){
      
      this.fetchjobs();
    },
    components:{
        Alert
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
