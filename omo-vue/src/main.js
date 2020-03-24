import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import slider from "./components/Slider"
import show from "./components/Show"

Vue.config.productionTip = false;

Vue.component(slider.name, slider);
Vue.component(show.name, show);

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");