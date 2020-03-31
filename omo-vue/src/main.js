import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import slider from "./components/Slider";
import call from "./components/Call";
import Carousel3d from 'vue-carousel-3d';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faSpinner, faAlignLeft } from '@fortawesome/free-solid-svg-icons'


library.add(faUserSecret)
library.add(faFontAwesome)
library.add(faSpinner, faAlignLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

var SocialSharing = require('vue-social-sharing');

Vue.use(Carousel3d);
Vue.use(SocialSharing);
Vue.config.productionTip = false;

Vue.component(slider.name, slider);
Vue.component(call.name, call);

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");