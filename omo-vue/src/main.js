import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import gallery from "./components/Gallery"
import slider from "./components/Slider"
import show from "./components/Show"

Vue.config.productionTip = false;

Vue.component(gallery.name, gallery);
Vue.component(slider.name, slider);
Vue.component(show.name, show);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");