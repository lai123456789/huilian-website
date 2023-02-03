import Vue from 'vue';
class Tool {
  //页面滚动到底部
  pageScrollToBottom() {
    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    //变量windowHeight是可视区的高度
    var windowHeight =
      document.documentElement.clientHeight || document.body.clientHeight;
    //变量scrollHeight是滚动条的总高度
    var scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    if (scrollTop + windowHeight == scrollHeight) {
      return true;
    } else {
      return false;
    }
  };
  //面板滚动到底部
  panelScrollToBottom(obj) {
    var scrollTop = obj.scrollTop;
    //变量windowHeight是可视区的高度
    var windowHeight = obj.clientHeight;
    //变量scrollHeight是滚动条的总高度
    var scrollHeight = obj.scrollHeight;
    if (scrollTop + windowHeight == scrollHeight) {
      return true;
    } else {
      return false;
    }
  };
  //改写系统设置缓存方法,带异步回调函数
  setStorageAsyn(key, content, succeed) {
    if (content.constructor == Object || content.constructor == Array) {
      content = JSON.stringify(content);
    }
    localStorage.setItem(key.toString() + "bdscales", content);
    succeed("");
  };
  //改写系统设置缓存方法
  setStorage(key, content) {
    if (content.constructor == Object || content.constructor == Array) {
      content = JSON.stringify(content);
    }
    localStorage.setItem(key.toString() + "bdscales", content);
  };
  //改写系统获取缓存同步方法
  getStorage(key) {
    var labelValue = "";
    try {
      labelValue = JSON.parse(localStorage.getItem(key.toString() + "bdscales"));
    } catch (e) {
      labelValue = localStorage.getItem(key.toString() + "bdscales");
    }
    return labelValue;
  };
  //因为做了路由缓存，跳转tabbar页需要特别处理,index,tabbar页下标
  switchTabbar(index = 0) {
    let tabbar = $nuxt.$store.state.mobile.tabbar;
    for (let i = 0; i < tabbar.lenght; i++) {
      tabbar[i].show = false;
    }
    tabbar[index].show = true;
    $nuxt.$store.commit('mobile/setTabbar', tabbar);
    $nuxt.$router.push({
      path: "/mobile",
      query: {
        tabbar: tabbar[index].label
      }
    });
  };
  //url参数转义
  urlCheckForMenuTitle(menuTitle) {
    menuTitle = menuTitle.toString().trim();
    //&转-
    menuTitle = menuTitle.replace(/\&/g, "-");
    //?转-
    menuTitle = menuTitle.replace(/\?/g, "-");
    //空格转-
    menuTitle = menuTitle.replace(/ /g, "-");
    //\转空白符
    menuTitle = menuTitle.replace(/\//g, "");
    //\转空白符
    menuTitle = menuTitle.replace(/\\/g, "");
    //(转空白符
    menuTitle = menuTitle.replace(/\(/g, "");
    //(转空白符
    menuTitle = menuTitle.replace(/\)/g, "");
    //)转空白符
    menuTitle = menuTitle.replace(/\)/g, "");
    //%转空白符
    menuTitle = menuTitle.replace(/\%/g, "");
    return menuTitle;
  };
  //获取当前时间,格式:yy-mm-dd
  getLocalTimeryymmhh() {
    var myDate = new Date();
    var year = myDate.getFullYear();
    var mon = myDate.getMonth() + 1;
    var day = myDate.getDate();
    return year + "-" + mon + "-" + day;
  };
  getLocalTimeryyyym(dis = 0) { //获取当前时间,格式:yyyy-m,dis传入改变的月数，可正可负
    var myDate = new Date();
    var year = myDate.getFullYear();
    var mon = myDate.getMonth() + 1;
    if (dis + mon == 0) {
      year--;
      mon = 12;
    } else if (dis + mon == 13) {
      year++;
      mon = 1;
    } else {
      mon = mon + dis;
    }
    return year + "-" + mon;
  }
  //清除编辑器版权信息
  clearEditInfo(content) {
    let newcontent = ""
    let index = content.indexOf('data-f-id="pbf"');
    if (index != -1) {
      newcontent = content.substring(0, index - 3);
    } else {
      newcontent = content;
    }
    return newcontent;
  };
  //生成随机数，minNum：最小值，maxNum最大值
  randomNum(minNum, maxNum) {
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * minNum + 1, 10);
        break;
      case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        break;
      default:
        return 0;
        break;
    }
  };
  // 反转富文本
  html2Escape = (str) => {
    str = str.replaceAll("%3C", "\<");
    str = str.replaceAll("%3E", "\>");
    str = str.replaceAll("%2F", "\/");
    str = str.replaceAll("%26", "\&");
    str = str.replaceAll("%3B", "\;");
    str = str.replaceAll("%20", " ");
    return str;
  };
}
export default new Tool();