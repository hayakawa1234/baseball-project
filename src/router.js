import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import MyTeam from './views/MyTeam.vue'
import Facility from './views/Facility.vue'
import TeamSearch from './views/TeamSearch.vue'
import TimeLine from './views/TimeLine.vue'
import CreatePost from './views/CreatePost.vue'
import MemberDetail from './views/MemberDetail'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/myTeam',
      name: 'myTeam',
      component: MyTeam
    },
    {
      path: '/facility',
      name: 'facility',
      component: Facility
    },
    {
      path: '/teamSearch',
      name: 'teamSearch',
      component: TeamSearch
    },
    {
      path: '/timeLine',
      name: 'timeLine',
      component: TimeLine
    },
    {
      path: '/createpost',
      name: 'createpost',
      component: CreatePost
    },
    {
      path: '/myTeam/memberDetail',
      name: 'memberDetail',
      component: MemberDetail
    },
  ]
})