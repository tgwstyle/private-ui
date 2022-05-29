import Vue from 'vue';
import App from './App.vue';
import haha from '../packages';

Vue.config.productionTip = false;
Vue.use(haha);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
