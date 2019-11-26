import { getCookie } from './cookieConfig';
export default {
  // 主题
  theme: getCookie('theme') ? getCookie('theme') : 'transparent'
};
