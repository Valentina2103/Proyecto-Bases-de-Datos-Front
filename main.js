import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'


import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  BootstrapVue,
  router,
  render: h => h(App),
}).$mount('#app')




