import config from '../../util/themeConfig';
import { getCookie, setCookie } from '../../util/cookieConfig';
export default {
  state: {
    isTransparent: config.isTransparent /* 所选数据 */
  },
  getters: {},
  mutations: {
    // table中选择框状态改变
    changeTheme (state) {
      state.isTransparent = !state.isTransparent;
      setCookie('theme', state.isTransparent);
    }
  },
  actions: {}
};
