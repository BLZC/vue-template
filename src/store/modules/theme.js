import config from '../../util/themeConfig';
import { getCookie, setCookie } from '../../util/cookieConfig';
export default {
  state: {
    theme: config.theme /* 所选数据 */
  },
  getters: {},
  mutations: {
    // table中选择框状态改变
    changeTheme (state, value) {
      state.theme = value;
      setCookie('theme', value);
    }
  },
  actions: {}
};
