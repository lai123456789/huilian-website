import Vue from 'vue';
// 内核
import cloudbase from "@cloudbase/js-sdk/app";
// 登录模块
import "@cloudbase/js-sdk/auth";
// 云函数模块
import "@cloudbase/js-sdk/functions";
// 云存储模块
import "@cloudbase/js-sdk/storage";

let env = "";
if (process.env.NODE_ENV === "development") { // 测试环境
  env = "ppg-2grw6ttyc107614c";  // 测试环境
  //env = "bds-4g0z8mtq63f02552";  // 生产环境
}
//生产环境
else if (process.env.NODE_ENV === "production") {
  env = "bds-4g0z8mtq63f02552" //bds
}

Vue.prototype.$cloudbase = cloudbase.init({
  env: env,
  // env: "ppg-2grw6ttyc107614c",
  region: "ap-guangzhou",
});