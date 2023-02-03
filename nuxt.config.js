export default {
  ssr: true,
  server: {
    port: 5000, // default: 3000
    host: "0.0.0.0", //默认
    // host: "192.168.130.210" // default: localhost
    // host: "192.168.0.61", // default: localhost
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "全新供应链数字化管理平台",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content: "全新供应链数字化管理平台",
      },
      {
        hid: "description",
        name: "description",
        content:
          "让供应链管理更智能，借助云计算、人工智能AI、IoT设备，基于云原生、微服务架构原理设计，多角色协同、可视化分析、 AI预警 、智能决策等技术方法，让数据驱动供应链业务流转，促进产业链各业务主体高效协同，提高运营效率，提高资金周转率，数字赋能产融升级，促进供应链稳定和谐发展。",
      },
      {
        name: "google-translate-customization",
        content: "867dc3f419d47a9-f902c9141601d379-g7b45463124b1a33e-b",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.ico" }],
    script: [
      //动态改变根节点的fontSize值   style.less设置了@media的根节点
      // {
      //   src: "/flexible.js",
      //   type: "text/javascript",
      //   charset: "utf-8",
      // },
      {
        src: "https://hm.baidu.com/hm.js?cca555d6ae131b8d739e94c78c4319bd",
      },
      {
        // 禁止用户在页面复制和鼠标右键操作
        innerHTML: `
        document.oncontextmenu=function(evt){
          evt.preventDefault(); 
          } 
        document.onselectstart=function(evt){ 
        evt.preventDefault(); 
        }; 
        `,
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "~assets/css/app.css",
    "~assets/css/style.css",
    "swiper/css/swiper.min.css",
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/app", ssr: true },
    { src: "~/plugins/element", ssr: true },
    { src: "~/plugins/FroalaEditor", ssr: false },
    { src: "~/plugins/cloudbase", ssr: false },
    { src: "~/plugins/plugins", ssr: false },
    { src: "~/plugins/public", ssr: false },
    { src: "~/store", ssr: true },
    { src: "~/plugins/swiper", ssr: true },
    { src: "~/plugins/baidu" },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxt/postcss8"],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  router: {
    base: "/",
    middleware: ["device"],
  },
  /*
   ** Build configuration
   */
  build: {
    publicPath: "/nuxt-ssr/_nuxt/",
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    postcss: {
      // 添加插件名称作为键，参数作为值
      // plugins: {
      //   "postcss-px-to-viewport": {
      //     unitToConvert: "px", // 默认值`px`，需要转换的单位
      //     viewportWidth: 1440, // 视窗的宽度,对应设计稿宽度
      //     // viewportHeight: '', // 视窗的高度, 根据375设备的宽度来指定，一般是667，也可不配置
      //     unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数
      //     propList: ["*"], // 转化为vw的属性列表
      //     viewportUnit: "vw", // 指定需要转换成视窗单位
      //     fontViewportUnit: "vw", // 字体使用的视窗单位
      //     selectorBlaskList: [".ignore-"], // 指定不需要转换为视窗单位的类
      //     mediaQuery: false, // 允许在媒体查询中转换`px`
      //     minPixelValue: 768, // 小于或等于`1px`时不转换为视窗单位
      //     replace: true, // 是否直接更换属性值而不添加备用属性
      //     exclude: [], // 忽略某些文件夹下的文件或特定文件
      //     landscape: false, // 是否添加根据landscapeWidth生成的媒体查询条件 @media (orientation: landscape)
      //     landscapeUnit: "vw", // 横屏时使用的单位
      //     landscapeWidth: 1134, // 横屏时使用的视窗宽度
      //   },
      // },
      // plugins: {
      //   "postcss-pxtorem": {
      //     //换算基数，默认100，把根标签的font-size规定为1rem为50px,在设计稿上量出多少px直接在代码中写多少px
      //     rootValue: 75, //75
      //     //保留rem小数点多少位
      //     unitPrecision: 5,
      //     //存储将被转换的属性列表，'!font-size' 即不对字体进行rem转换
      //     propList: ["*", "!border"], //, "!font-size"
      //     //要忽略并保留为px的选择器，例如fs-xl类名，里面有关px的样式将不被转换，支持正则写法。
      //     selectorBlackList: [".radius"],
      //     replace: true,
      //     //（布尔值）媒体查询( @media screen 之类的)中不生效
      //     mediaQuery: false,
      //     //设置要替换的最小像素值，px小于12px的时候不会被转换
      //     minPixelValue: 12,
      //     //默认值是一个空数组，这意味着禁用白名单并启用所有属性
      //     //propWhiteList: [],
      //     //黑名单
      //     propBlackList: ["font-size"],
      //   },
      // },
    },
    // 解决less加载使用不了的问题
    // loaders: {
    //   less: {
    //     javascriptEnabled: true,
    //   },
    // },
  },
};
