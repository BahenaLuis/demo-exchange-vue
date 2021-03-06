import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import Chart from "chart.js";
import router from "@/router";
import { dollarFilter, percentFilter } from "@/filters";
import Chartick from "vue-chartkick";
import { VueSpinners } from "@saeris/vue-spinners";

Vue.use(Chartick.use(Chart));
Vue.use(VueSpinners);
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
