import Vue from "vue";
import Vuex from "vuex";
import httpFn from "@/service/httpFn";
Vue.use(Vuex);
const store = () => {
  return new Vuex.Store({
    state: {
      lang: "",
      ismobile: false,
      isLogin: false,
      userInfo: null,
      siteInfo: null, //首页信息
      homeInfo: null, //首页信息
      menus: [], //分类列表,铺平的列表
      menuCalcs: [], //处理过父子关系的列表
      videos: [], //视频链接
      footerFix: true,
    },
    mutations: {
      // 根据滚动条滑动位置 固定底部微信咨询区域显示
      setFooterFix(state, val) {
        state.footerFix = val;
      },
      // 登录
      login(state, val) {
        state.isLogin = true;
        state.userInfo = val;
        localStorage.setItem("userInfo", JSON.stringify(val));
        localStorage.setItem("isLogin", "true");
      },
      logout(state, val) {
        state.isLogin = false;
        localStorage.setItem("userInfo", "");
        localStorage.setItem("isLogin", "");
      },
      commitLang(state, val) {
        state.lang = val;
      },
      setIsmobile(state, val) {
        state.ismobile = val;
      },
      // 保存网站信息
      commitSiteInfo(state, val) {
        let siteInfo = {
          name: "",
          cover: {},
          email: "",
          introduce: "",
          langCode: "en-US",
          logo: {
            download_url: "./img/logo.png",
          },
          name: 123,
          navs: [],
          otherSites: [],
          passage: "",
          phone: "",
          phone2: "",
          pros: [],
          seoDesc: "",
          seoKey: "",
          word: "",
          ...val,
        };
        for (let key in siteInfo) {
          try {
            siteInfo[key] = JSON.parse(siteInfo[key]);
          } catch {}
        }
        siteInfo.otherSites = siteInfo.otherSites.filter((item) => item.name); //第三方链接需要过滤不为空的
        siteInfo.logo = siteInfo.logo?.download_url || "";
        siteInfo.cover = siteInfo.cover?.download_url || "";
        siteInfo.navs = [
          { name: "首页", to: "/" },
          { name: "产品概览", to: "/allproduct" },
          { name: "客户案例", to: "/customerCase" },
          { name: "NEXTSCM 协同云平台", to: "/application" },
          { name: "关于慧链", to: "/about" },
        ];
        siteInfo.seoKey =
          "供应链ERP、供应链管理、深圳供应链、供应链数字化、供应链金融系统";
        state.siteInfo = siteInfo;
      },
      // 保存首页信息
      commintHomeInfo(state, val) {
        let homeInfo = {
          one: [], //bannar
          two: "", //欢迎语
          three: {}, //欢迎语
          four: {}, //欢迎语
          five: {}, //欢迎语
          six: {}, //欢迎语
          seven: {},
          eight: {}, //欢迎语
          nine: {}, //欢迎语
          ten: {}, //欢迎语
          threeProducts: [], //主推产品列表
          newProducts: [], //最新产品列表
          newList: [], //欢迎语
          bannarNav: [], //bannar链接
          ...val, //欢迎语
        };
        for (let key in homeInfo) {
          try {
            homeInfo[key] = JSON.parse(homeInfo[key]);
          } catch {}
        }
        if (homeInfo.bannarNav) {
          homeInfo.one.forEach((item, index) => {
            item["toUrl"] = homeInfo.bannarNav[index] || "";
          });
        }
        state.menus.map((item) => {
          homeInfo.threeProducts.forEach((item2) => {
            if (item2.menu == item._id) {
              item2["menuName"] = item.name;
            }
          });
          homeInfo.newProducts.forEach((item3) => {
            if (item3.menu == item._id) {
              item3["menuName"] = item.name;
            }
          });
        });
        // console.log(homeInfo, "homeInfo");
        state.homeInfo = homeInfo;
      },
      commitMenus(state, val) {
        state.menus = val;
        let menuCalcs = []; //有层级的分类
        val.map((item) => {
          if (!item.parentId) {
            item["children"] = [];
            menuCalcs.push(item);
          }
        });
        menuCalcs.forEach((item1) => {
          val.map((item2) => {
            if (item1._id == item2.parentId) {
              item1.children.push(item2);
            }
          });
        });
        state.menuCalcs = menuCalcs;
      },
      // 保存视频信息
      commtVideo(state, val) {
        state.videos = val;
      },
    },
    actions: {
      async saveVideoInfo(store, params = {}) {
        const res = await httpFn.saveVideoInfo(params, store);
        return res;
      },
      async getVideos(store, params = {}) {
        const res = await httpFn.getVideos(params, store);
        store.commit("commtVideo", res);
        return res;
      },
      async deleteVideo(store, params = {}) {
        const res = await httpFn.deleteVideo(params, store);
        return res;
      },
      async getMenuInfo(store, params = {}) {
        const res = await httpFn.getMenuInfo(params, store);
        return res;
      },
      async saveMenuInfo(store, params = {}) {
        const res = await httpFn.saveMenuInfo(params, store);
        return res;
      },
      async getMenus(store, params = {}) {
        const res = await httpFn.getMenus(params, store);
        store.commit("commitMenus", res);
        return res;
      },
      async deleteMenu(store, params = {}) {
        const res = await httpFn.deleteMenu(params, store);
        return res;
      },
      async getMessages(store, params = {}) {
        const res = await httpFn.getMessages(params, store);
        return res;
      },
      async saveMessage(store, params = {}) {
        const res = await httpFn.saveMessage(params, store);
        return res;
      },
      async getItems(store, params = {}) {
        const res = await httpFn.getItems(params, store);
        return res;
      },
      async getItemInfo(store, params = {}) {
        const res = await httpFn.getItemInfo(params, store);
        return res;
      },
      async deleteItem(store, params = {}) {
        const res = await httpFn.deleteItem(params, store);
        return res;
      },
      async saveItemInfo(store, params = {}) {
        const res = await httpFn.saveItemInfo(params, store);
        return res;
      },
      async getNews(store, params = {}) {
        const res = await httpFn.getNews(params, store);
        return res;
      },
      async getNewInfo(store, params = {}) {
        const res = await httpFn.getNewInfo(params, store);
        return res;
      },
      async deleteNew(store, params = {}) {
        const res = await httpFn.deleteNew(params, store);
        return res;
      },
      async saveNewInfo(store, params = {}) {
        const res = await httpFn.saveNewInfo(params, store);
        return res;
      },
      async deleteProduct(store, params = {}) {
        const res = await httpFn.deleteProduct(params, store);
        return res;
      },
      async getProducts(store, params = {}) {
        const res = await httpFn.getProducts(params, store);
        return res;
      },
      async getProductInfo(store, params = {}) {
        const res = await httpFn.getProductInfo(params, store);
        return res;
      },
      async saveProduct(store, params = {}) {
        const res = await httpFn.saveProduct(params, store);
        return res;
      },
      // 保存首页信息
      async saveHomeInfo(store, params = {}) {
        const res = await httpFn.saveHomeInfo(params, store);
        return res;
      },
      // 获取首页信息
      async getHomeInfo(store, params = {}) {
        const res = await httpFn.getHomeInfo(params, store);
        store.commit("commintHomeInfo", res);
        return res;
      },
      // 登录
      async login(store, params = {}) {
        const res = await httpFn.login(params, store);
        return res;
      },
      // 获取网站信息
      async getSiteInfo(store, params = {}) {
        const res = await httpFn.getSiteInfo(params, store);
        store.commit("commitSiteInfo", res);
        return res;
      },
      // 保存网站信息
      async saveSiteInfo(store, params = {}) {
        const res = await httpFn.saveSiteInfo(params, store);
        return res;
      },
    },
  });
};
export default store;
