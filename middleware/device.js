import { deviceType } from "@/assets/js/deviceType";
export default async function (context) {
  // 获取浏览器语言设置
  let language = process.server
    ? context.req.headers["accept-language"]
    : navigator.language;
  language = language.substring(0, 5).split(",")[0];
  context.store.commit("commitLang", language);
  // 获取移动端还是
  context.userAgent = process.server
    ? context.req.headers["user-agent"]
    : navigator.userAgent;
  context.deviceType = deviceType(context.userAgent);
  if (context.deviceType.type === "pc") {
    context.store.commit("setIsmobile", false);
  } else {
    context.store.commit("setIsmobile", true);
  }
  if (!context.route.matched.length) {
    context.redirect("/error");
  }
  let menus = context.store.state.menus;
  if (menus.length == 0) {
    const resHome = await context.store.dispatch("getMenus"); //获取分类信息
  }
  let siteInfo = context.store.state.siteInfo;
  if (!siteInfo) {
    const resSite = await context.store.dispatch("getSiteInfo"); //获取网站信息
  }
  let homeInfo = context.store.state.homeInfo;
  if (!homeInfo) {
    const resHome = await context.store.dispatch("getHomeInfo"); //获取首页
  }
}
