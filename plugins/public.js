import Vue from 'vue';
import zh from '@/lang/zh';
import en from '@/lang/en';
const getSysLang = () => { //获取系统语言zh_CN:"中文";en_US:英文
  let sysLang = navigator.language || "zh-CN";
  return sysLang;
};
Vue.prototype.$sysLang = getSysLang();
Vue.prototype.$langConfig = getSysLang() == "zh-CN" ? zh : en;