import Vue from 'vue'
import App from './App.vue'
import VueCodeMirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css'
import router from './router'


Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.use(ElementUI).use(VueCodeMirror);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
