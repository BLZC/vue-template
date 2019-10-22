import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import * as fundebug from 'fundebug-javascript';
import fundebugVue from 'fundebug-vue';
import 'babel-polyfill';
import ElementUI from 'element-ui';
// 全局注册组件
import './components/global';
// Vue富文本编辑器
import VueQuillEditor from 'vue-quill-editor';
// 国际化
// import locale from 'element-ui/lib/locale/lang/en';
import { get, post } from './request/http';
import 'element-ui/lib/theme-chalk/index.css';
import { LZCMessage } from './common/index';
fundebug.apikey = '52d507b292589f5a2371f950c2725b59b6aa31b19c02dc5ef6dcd9991ab42757';
fundebugVue(fundebug, Vue);
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
