//封装请求
import baseUrl from "./baseUrl";
class API {
  async GET(url, params = {}, store) {
    // params['lang'] = "zh-CN";
    // if (process.server && store.state) {
    //   // 服务端
    //   params.lang = store.state.lang;
    // } else {
    //   // 客户端
    //   params.lang = Vue.prototype.$sysLang;
    // }
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let _params = "";
    if (params) {
      _params += "?r=" + Math.random() + "&";
      for (let key in params) {
        _params += key + "=" + params[key] + "&";
      }
    };
    _params = _params.substring(0, _params.length - 1);
    let response = await fetch(baseUrl + url + _params, requestOptions);
    let res = null;
    if (response) {
      try {
        res = await response.json();
      } catch (err) {

      }
    }
    return Promise.resolve(res);
  };
  async POST(url, params = {}) {
    // let formdata = new FormData();
    // formdata.append("requestJson", JSON.stringify(params));
    let requestOptions = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params),
      // body: params,
      redirect: "follow",
    };
    let response = await fetch(baseUrl + url, requestOptions);
    let res = null;
    if (response) {
      try {
        res = await response.json();
      } catch (err) {

      }
    }
    return Promise.resolve(res);
  };
  getLang() {
    let language = process.server ? context.req.headers["accept-language"] : navigator.language;
    language = language.substring(0, 5).split(",")[0];
    context.store.commit('commitLang', language);
    return language;
  };
};
export default new API();
