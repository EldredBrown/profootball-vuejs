import Vue from 'vue';
import VueRouter from 'vue-router';
import PageNotFound from '@/views/PageNotFound';

Vue.use(VueRouter)

const parseProps = r => ({ id: parseInt(r.params.id) });

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "bundle.home" */ '../views/Home')
  },
  {
    path: '/seasons',
    name: 'SeasonsIndex',
    component: () => import(/* webpackChunkName: "bundle.seasons" */ '../views/SeasonsIndex')
  },
  {
    path: '/seasons/:id',
    name: 'SeasonDetail',
    component: () => import(/* webpackChunkName: "bundle.seasons" */ '../views/SeasonDetail'),
    props: parseProps,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "bundle.about" */ '../views/About')
  },
  {
    path: '*',
    component: PageNotFound,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
