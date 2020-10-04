<template>
  <div class="edit container">
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
            <li><router-link to="/jobs">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
          
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header">Edit Job</h1>
    <form v-on:submit="updatejob">
        <div class="well">
            <h4>Job Info</h4>
            <div class="form-group">
                <label>Job Title</label>
                <input type="text" class="form-control" placeholder="Job Title" v-model="job.job_title">
            </div>
            <div class="form-group">
                <label>Job Description</label>
                <input type="text" class="form-control" placeholder="Job Description" v-model="job.profile_description">
            </div>
            <div class="form-group">
                <label>Job Category</label>
                <input type="text" class="form-control" placeholder="Job Category" v-model="job.category">
            </div>
            <div class="form-group">
                <label>Package</label>
                <input type="text" class="form-control" placeholder="Package" v-model="job.package">
            </div>
            <div class="form-group">
                <label>Required Skills</label>
                <input type="text" class="form-control" placeholder="Required Skills" v-model="job.required_skills">
            </div>
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
    import Alert from './Alert'
    export default {
    name: 'edit',
    data () {
        return {
        job: {},
        alert:''
        }
    },
    methods: {
        fetchjob(id){
            this.$http.get('http://localhost:8000/jobs/'+id)
            .then(function(response){
                this.job = response.body;
            });
        },
        updatejob(e){
            if(!this.job.job_title || !this.job.profile_description || !this.job.category || !this.job.package || !this.job.required_skills){
                this.alert = 'Please fill in all required fields';
            } else {
                let updjob = {
                    id:this.$route.params.id,
                    job_title: this.job.job_title,
                    profile_description: this.job.profile_description,
                    category: this.job.category,
                    package: this.job.package,
                    required_skills: this.job.required_skills
                }

                this.$http.put('http://localhost:8000/jobs', updjob)
                    .then(function(response){
                        this.$router.push({path: '/jobs', query: {alert: 'Job Updated'}});
                    });

                e.preventDefault();
            }
            e.preventDefault();
        }
    },
    created: function(){
        this.fetchjob(this.$route.params.id);
    },
    components:{
        Alert
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
