import Vue from 'vue';
import VueRouter from 'vue-router';
import PageNotFound from '@/views/PageNotFound';

Vue.use(VueRouter)

const parseProps = r => ({ id: parseInt(r.params.id) });

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "bundle.home" */ '../views/Home'),
  },
  {
    path: '/leagues/index',
    name: 'LeagueIndex',
    component: () => import(/* webpackChunkName: "bundle.leagues" */ '../views/leagues/LeagueIndex'),
  },
  {
    path: '/leagues/details/:id',
    name: 'LeagueDetails',
    component: () => import(/* webpackChunkName: "bundle.leagues" */ '../views/leagues/LeagueDetails'),
    props: parseProps,
  },
  {
    path: '/leagues/edit/:id',
    name: 'LeagueEdit',
    component: () => import(/* webpackChunkName: "bundle.leagues" */ '../views/leagues/LeagueEdit'),
    props: parseProps,
  },
  {
    path: '/seasons/index',
    name: 'SeasonIndex',
    component: () => import(/* webpackChunkName: "bundle.seasons" */ '../views/seasons/SeasonIndex'),
  },
  {
    path: '/seasons/details/:id',
    name: 'SeasonDetails',
    component: () => import(/* webpackChunkName: "bundle.seasons" */ '../views/seasons/SeasonDetails'),
    props: parseProps,
  },
  {
    path: '/seasons/edit/:id',
    name: 'SeasonEdit',
    component: () => import(/* webpackChunkName: "bundle.seasons" */ '../views/seasons/SeasonEdit'),
    props: parseProps,
  },
  {
    path: '/teams/index',
    name: 'TeamIndex',
    component: () => import(/* webpackChunkName: "bundle.teams" */ '../views/teams/TeamIndex'),
  },
  {
    path: '/teams/details/:id',
    name: 'TeamDetails',
    component: () => import(/* webpackChunkName: "bundle.teams" */ '../views/teams/TeamDetails'),
    props: parseProps,
  },
  {
    path: '/teams/edit/:id',
    name: 'TeamEdit',
    component: () => import(/* webpackChunkName: "bundle.teams" */ '../views/teams/TeamEdit'),
    props: parseProps,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "bundle.about" */ '../views/About'),
  },
  {
    path: '*',
    component: PageNotFound,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
