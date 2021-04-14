import Vue from "vue";
import VueMeta from "vue-meta";
import App from "./App";
import router from './router';
import store from "./store";

Vue.use(VueMeta)

new Vue({
  components: { App },
  template: "<App/>",
  router,
  store
}).$mount("#app");
