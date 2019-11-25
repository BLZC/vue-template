import { VueCookies as cookies } from 'vue-cookies';
// 获取cookie
export function getCookie (name) {
  cookies.get(name);
}

// 设置cookie
export function setCookie (name, value) {
  cookies.set(name, value);
}

// 删除cookie
export function deleteCookie (name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null) { document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString(); }
}
