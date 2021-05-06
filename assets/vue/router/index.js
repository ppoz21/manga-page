import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import Genres from "../views/Genres";
import List from "../views/List";
import ComicDetails from "../views/ComicDetails";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/o-nas", component: About },
    { path: "/lista-rozdzialow", component: List },
    { path: "/gatunki", component: Genres },
    { path: "/komiks/:slug-k:id", component: ComicDetails, name: 'komiks' },
    { path: "/", component: Home },
    { path: "*", redirect: "/" }
  ]
});
