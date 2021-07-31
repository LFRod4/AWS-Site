import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./../node_modules/bulma/css/bulma.css";

import VueScrollTo from "vue-scrollto";
Vue.use(VueScrollTo, {
  container: "body",
  duration: 400,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
