import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import slider from "./components/Slider"
import Carousel3d from 'vue-carousel-3d';

Vue.use(Carousel3d);
Vue.config.productionTip = false;

Vue.component(slider.name, slider);

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");