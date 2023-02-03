// 请求方法
// 请求方法类
import url from "./url";
import request from "./request";
export default {
  login: (params, store) => request.GET(url.login, params, store),
  getSiteInfo: (params, store) => request.GET(url.getSiteInfo, params, store),  //获取网站信息
  saveSiteInfo: (params, store) => request.GET(url.saveSiteInfo, params, store),  //获取网站信息
  getHomeInfo: (params, store) => request.GET(url.getHomeInfo, params, store),  //获取首页信息
  saveHomeInfo: (params, store) => request.GET(url.saveHomeInfo, params, store),  //保存首页信息
  saveProduct: (params, store) => request.POST(url.saveProduct, params, store),  //保存首页信息
  getProductInfo: (params, store) => request.GET(url.getProductInfo, params, store),  //保存首页信息
  getProducts: (params, store) => request.GET(url.getProducts, params, store),  //保存首页信息
  deleteProduct: (params, store) => request.GET(url.deleteProduct, params, store),  //保存首页信息

  saveNewInfo: (params, store) => request.POST(url.saveNewInfo, params, store),  //保存首页信息
  deleteNew: (params, store) => request.GET(url.deleteNew, params, store),  //保存首页信息
  getNewInfo: (params, store) => request.GET(url.getNewInfo, params, store),  //保存首页信息
  getNews: (params, store) => request.GET(url.getNews, params, store),  //保存首页信息

  getItems: (params, store) => request.GET(url.getItems, params, store),  //保存首页信息
  getItemInfo: (params, store) => request.GET(url.getItemInfo, params, store),  //保存首页信息
  deleteItem: (params, store) => request.GET(url.deleteItem, params, store),  //保存首页信息
  saveItemInfo: (params, store) => request.GET(url.saveItemInfo, params, store),  //保存首页信息

  saveMessage: (params, store) => request.GET(url.saveMessage, params, store),  //留言
  getMessages: (params, store) => request.GET(url.getMessages, params, store),  //获取留言信息

  //分类相关
  saveMenuInfo: (params, store) => request.GET(url.saveMenuInfo, params, store),  //留言
  getMenus: (params, store) => request.GET(url.getMenus, params, store),  //获取留言信息
  deleteMenu: (params, store) => request.GET(url.deleteMenu, params, store),  //留言
  getMenuInfo: (params, store) => request.GET(url.getMenuInfo, params, store),  //获取留言信息

  saveVideoInfo: (params, store) => request.GET(url.saveVideoInfo, params, store),  //获取留言信息
  getVideos: (params, store) => request.GET(url.getVideos, params, store),  //留言
  deleteVideo: (params, store) => request.GET(url.deleteVideo, params, store),  //获取留言信息
};
