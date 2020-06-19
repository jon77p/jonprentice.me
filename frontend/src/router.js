import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/privacy",
    name: "privacy",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "privacy" */ "./views/Privacy.vue")
  },
  {
    path: "/music",
    name: "music",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "music" */ "./views/Music.vue")
  },
  {
    path: "/blog",
    name: "blog",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "music" */ "./views/Blog.vue")
  }
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
