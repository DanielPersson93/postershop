import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Poster from "../views/Poster.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/poster/:id",
    name: "Poster",
    component: Poster,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
