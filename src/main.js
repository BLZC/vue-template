import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
// Vue富文本编辑器
import VueQuillEditor from 'vue-quill-editor';
// 国际化
// import locale from 'element-ui/lib/locale/lang/en';
import { get, post } from './request/http';
import 'element-ui/lib/theme-chalk/index.css';
import { LZCMessage } from './common/index';
Vue.config.productionTip = false;
Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$LZCMessage = LZCMessage;
Vue.use(ElementUI);
Vue.use(VueQuillEditor /* { default global options } */);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
