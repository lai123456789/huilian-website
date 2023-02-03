// 基础字体大小
const baseValue = 75;
// 可视区的大小，移动端是屏幕的宽度，PC端是浏览器可视区的宽度
let clientWidth = 0;
// 设计稿的宽度
const designWidth = 1440;
// 设置 rem 函数
function setRem() {
  // 当前页面宽度相对于 1920宽的缩放比例，可根据自己需要修改。
  clientWidth = document.documentElement.clientWidth;
  const scale = clientWidth / designWidth;
  // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
  document.documentElement.style.fontSize = baseValue * scale + "px";
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem();
};
