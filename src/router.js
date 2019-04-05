import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Journal from './views/Journal.vue'
import Stats from './views/Statistics.vue'
import Challenges from './views/Challenges.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/journal',
      name: 'journal',
      component: Journal
    },
    {
      path: '/challenges',
      name: 'challenges',
      component: Challenges
    },
    {
      path: '/stats',
      name: 'stats',
      component: Stats
    }
  ]
})
