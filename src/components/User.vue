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
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
          
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <Alert v-if="alert" v-bind:message="alert" />

    <form v-on:submit="checkUser">
        <div class="well">
            <h4>Login</h4>
           <input type="text" class="fadeIn second" placeholder="UserName" v-model="user.username">
           <button type="submit" class="btn btn-primary pull-right">Submit</button>
        </div>

        
    </form>
  </div>
</template>

<script>
    import Alert from './Alert'
    export default {
    name: 'add',
    data () {
        return {
        user: {},
        alert:''
        }
    },
    methods: {
        checkUser(e){
            if(!this.user.username){
                this.alert = 'Please fill in all required fields';
            } else {
                if(this.user.username=="recruiter@screel.in"){
                  this.$session.set('username', this.user.username)
                    this.$router.push({path: '/jobs', query: {alert: 'Welcome Back admin'}});
                }else if(this.user.username=="candidate@screel.in"){
                  this.$session.set('username', this.user.username)
                    this.$router.push({path: '/job', query: {alert: 'Welcome Back Candidate'}});
                }else{
                    this.alert = 'Invalid User';
                }

                

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
