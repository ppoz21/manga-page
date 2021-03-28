import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import About from "../views/About";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/o-nas", component: About },
    { path: "/", component: Home },
    { path: "*", redirect: "/" }
  ]
});