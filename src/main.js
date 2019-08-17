// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import './common/viewport';
import 'swiper/dist/css/swiper.css';
// import './assets/reset.scss';

import Heador from './components/public/Heador';
import Navbar from './components/public/Navbar';
import Footor from './components/public/Footor/Footor';

Vue.config.productionTip = false;

// import global public components
Vue.component(Heador.name, Heador);
Vue.component(Navbar.name, Navbar);
Vue.component(Footor.name, Footor);
// Vue.use(Footor);

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: {App},
    template: "<App/>"
});
