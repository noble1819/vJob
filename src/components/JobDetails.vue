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
    <Alert v-if="alert" v-bind:message="alert" />
    <router-link to="/job">Back</router-link>
    <h1 class="page-header">{{job.job_title}}
        <span class="pull-right">
            <button class="btn btn-primary" v-on:click="applyjob(job.id,$session.get('username'))">Apply</button>
            </span>
    </h1>
            <ul class="list-group">
            <li class="list-group-item">Profile Description : {{job.profile_description}}</li>
            <li class="list-group-item">Category            : {{job.category}}</li>
            <li class="list-group-item">Package             : {{job.package}}</li>
            <li class="list-group-item">Required Skills     : {{job.required_skills}}</li>
            <li class="list-group-item">posted_date         : {{job.posted_date}}</li>
        </ul>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'jobdetails',
  data () {
    return {
      job: '',
      alert:''
    }
  },
  methods:{
      fetchjob(id){
          this.$http.get('http://localhost:8000/jobs/'+id)
          .then(function(response){
            this.job = response.body;
            this.$session.set('jid', this.job.id);
          });
      },
      applyjob(id,name){
          if(this.id=='' || this.name==''){
                this.alert = 'We are facing some error';
            } else {
              this.alert = 'Awesome';
                let jobapply = {
                    job_id: id,
                    user_name: name
                }
          this.$http.post('http://localhost:8000/jobs/'+id+'/apply',jobapply)
          .then(function(response){
                 this.$router.push({path: '/job', query: {alert: 'job Applied'}});
           });
          
      }
      
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
