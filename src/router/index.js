import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import NoMatch from '@/views/NoMatch.vue';
import StarshipDetail from '@/views/StarshipDetail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/starship/:id',
    name: 'StarshipDetail',
    component: StarshipDetail,
  },
  {
    path: '*',
    name: 'NoMatch',
    component: NoMatch,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
