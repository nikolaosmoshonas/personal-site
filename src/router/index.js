import Vue from 'vue'
import VueRouter from 'vue-router'


import AboutMe from "@/views/Home";
import Home from "@/views/Home";
import Projects from "@/views/Projects";


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
    {
      path: '/about',
      name: 'AboutMe',
      component: AboutMe
    }
    ,
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
