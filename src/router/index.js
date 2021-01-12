import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from './../components/Layout/Layout.vue'
import Single_job from './../components/Layout/Jobs/Single-Job/Single_job.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    component: Layout
  },
  {
    path: '/job/:id',
    component: Single_job
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
