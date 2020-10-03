// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Jobs from './components/Jobs'
import User from './components/User'
import JobsAdmin from './components/JobsAdmin'
import About from './components/About'
import Add from './components/Add'
import Edit from './components/Edit'
import JobDetails from './components/JobDetails'

Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path:'/', component: User},
    {path:'/job', component: Jobs},
    {path: '/about', component: About},
    {path: '/add', component: Add},
    {path: '/job/:id', component: JobDetails},
    {path: '/jobs', component: JobsAdmin},
    {path: '/edit/:id', component: Edit},
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
     
      <router-view></router-view>
    </div>
  `
}).$mount('#app')
