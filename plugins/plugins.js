// 谷歌多语言插件
// (function () {
//   let echat = document.createElement('script');
//   echat.type = 'text/javascript';
//   echat.async = true;
//   echat.id = 'echatmodulejs';
//   echat.setAttribute('charset', 'UTF-8');
//   echat.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//   let s = document.getElementsByTagName('script')[0];
//   s.parentNode.insertBefore(echat, s);
// })();
// 百度地图
(function () {
  let echat = document.createElement('script');
  echat.type = 'text/javascript';
  echat.async = true;
  echat.id = 'echatmodulejs';
  echat.setAttribute('charset', 'UTF-8');
  echat.src = 'https://api.map.baidu.com/getscript?v=3.0&ak=B6aG5hbpslZkTCqKTM88C9tBg7M60k8G';
  let s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(echat, s);
})();

