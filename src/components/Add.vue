<template>
  <div class="add container">
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
    <h1 class="page-header">Add Job</h1>
    <form v-on:submit="addJob">
        <div class="well">
            <h4>Job Info</h4>
            <div class="form-group">
                <label>Job Title</label>
                <input type="text" class="form-control" placeholder="Title" v-model="job.job_title">
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
    name: 'add',
    data () {
        return {
        job: {},
        alert:''
        }
    },
    methods: {
        addJob(e){
            if(!this.job.job_title || !this.job.profile_description || !this.job.category || !this.job.package || !this.job.required_skills){
                this.alert = 'Please fill in all required fields';
            } else {
                let newJob = {
                    job_title: this.job.job_title,
                    profile_description: this.job.profile_description,
                    category: this.job.category,
                    package: this.job.package,
                    required_skills: this.job.required_skills
                }

                this.$http.post('http://localhost:8000/jobs', newJob)
                    .then(function(response){
                        this.$router.push({path: '/', query: {alert: 'Job Added'}});
                    });

                e.preventDefault();
            }
            e.preventDefault();
        }
    },
    components: {
        Alert
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
