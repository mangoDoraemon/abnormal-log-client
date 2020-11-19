import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import App from './App.vue'
import { addDateRange,filterType } from "@/utils/common";
import { parseTime } from "@/utils/index";

Vue.use(ElementUI);

Vue.prototype.addDateRange = addDateRange
Vue.prototype.parseTime = parseTime
Vue.prototype.filterType =filterType

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')