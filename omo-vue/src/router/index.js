import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {Carousel3d, Slide} from 'vue-carousel-3d';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default {
  router,
  component : {
    Carousel3d,
    Slide
  }
}