<template>
  <div class="home">
    <div class="main__frame">
      <!-- <div class="mask_bg"></div> -->
      <section class="bannar">
        <div class="bannar-container">
          <div class="bannar-content">
            <div class="bannar1">
              <p>NEXTSCM</p>
              <p>全新供应链数字化管理平台</p>
            </div>
            <div class="bannar2">数字 · 协同 · 生态 · 智能</div>
            <div class="bannar3">
              让供应链管理更智能，借助云计算、人工智能AI、IoT设备，基于云原生、微服务架构原理设计，多角色协同、可视化分析、
              AI预警
              、智能决策等技术方法，让数据驱动供应链业务流转，促进产业链各业务主体高效协同，提高运营效率，提高资金周转率，数字赋能产融升级，促进供应链稳定和谐发展。
            </div>
          </div>
        </div>
      </section>

      <section class="introduce">
        <div class="data_driven">
          <div class="wel_frame">让数据驱动订单全流程管理</div>
          <div class="data_driven_img container" style="text-align: center">
            <img src="~assets/img/index4.png" alt="" class="process_img" />
          </div>
        </div>
        <div class="process_manage container">
          <el-row :gutter="16">
            <el-col
              :xs="12"
              :sm="6"
              :md="6"
              :lg="6"
              :xl="6"
              v-for="(item, index) in list"
              :key="index"
            >
              <div class="process_manage_item">
                <div>{{ item.title }}</div>
                <div>{{ item.describe }}</div>
              </div>
            </el-col>
          </el-row>
        </div>
      </section>

      <section class="all_wel_frame">
        <div class="wel_frame container">
          全新数字化协同管理平台广泛应用于供应链多业务场景
        </div>
        <div class="all_wel_frame_product container">
          <img src="~assets/img/index1.png" alt="" />
        </div>
      </section>

      <section class="all_wel_frame">
        <div class="wel_frame container">全方位赋能供应链上下游企业</div>
        <div class="product container">
          <img src="~assets/img/index2.png" alt="" />
        </div>
      </section>

      <section class="introduce">
        <div class="wel_frame">产品系列</div>
        <div class="container">
          <img src="~assets/img/index3.png" alt="" class="introduce_img" />
        </div>
      </section>
      <section class="introduce hidden-xs-only">
        <div class="data_driven_text_flex">
          <div class="introduce_text">
            <p>
              <span class="introduce_1">多场景：</span
              >标准产品支持90%以上供应链服务模式
            </p>
            <p>
              <span class="introduce_1">多品类：</span
              >机械、电子、塑胶、危化品、快消品、生鲜、煤炭、钢铁、石油等
            </p>
            <div class="one_line">
              <p>
                <span class="introduce_1">多平台：</span>PC、Mobile、PDA、TV
              </p>
              <p><span class="introduce_1">全流程：</span>生产-流通-消费终端</p>
            </div>
          </div>
        </div>
      </section>
      <section class="technical_architecture hidden-xs-only">
        <div class="wel_frame">技术架构</div>
        <div class="container">
          <div class="technical_architecture_text">
            采用容器化、Service
            Mesh等先进互联网云原生架构，结合低代码技术提供自定义能力，灵活适配差异化需求部署于主流云平台，以全站安全防护、异地灾备、弹性扩容等技术，确保数据机密性、完整性、可靠性标准openAPI接口，高效打通供应链、生产、物流、销售各系统
          </div>
          <img src="~assets/img/index5.png" alt="" class="introduce_img" />
        </div>
      </section>
      <section class="introduce">
        <div class="wel_frame">团队参与实施案例</div>
        <div class="container" style="text-align: center">
          <img src="~assets/img/index6.jpg" alt="" class="process_img" />
        </div>
      </section>
      <section class="service_technical_support" id="homeIndex">
        <img
          class="hidden-sm-only hidden-md-only hidden-lg-only hidden-xl-only service_technical_mobile_bg"
          src="~assets/img/index7Bg_mobile.png"
          alt=""
        />
        <div class="wel_frame">服务&技术支持</div>
        <div class="service_technical_support_content container">
          <el-row
            :gutter="32"
            style="display: flex; justify-content: center; flex-flow: row wrap"
          >
            <el-col
              :xs="8"
              :sm="3"
              :md="3"
              :lg="3"
              :xl="3"
              class="content_center"
              v-for="(item, index) in technical_support_data"
              :key="index"
            >
              <img :src="item.src" alt="" />
              <div class="service_technical_support_div">
                <div class="service_technical_support_div1">
                  {{ item.title }}
                </div>
                <div class="service_technical_support_div2 hidden-xs-only">
                  {{ item.describe }}
                </div>
                <div
                  class="line_border"
                  :class="[2, 5, 6].includes(index) ? 'hidden-xs-only' : ''"
                ></div>
              </div>
            </el-col>
          </el-row>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  head() {
    return {
      // title: this.siteInfo?.name + this.siteInfo?.word || "bdscales",
      title: "全新供应链数字化管理平台 - 慧链科技",
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: this.siteInfo.seoKey || this.siteInfo.word,
        },
        {
          hid: "description",
          name: "description",
          // content: this.siteInfo.seoDesc || this.siteInfo.word,
          content:
            "让供应链管理更智能，借助云计算、人工智能AI、IoT设备，基于云原生、微服务架构原理设计，多角色协同、可视化分析、 AI预警 、智能决策等技术方法，让数据驱动供应链业务流转，促进产业链各业务主体高效协同，提高运营效率，提高资金周转率，数字赋能产融升级，促进供应链稳定和谐发展。",
        },
      ],
    };
  },
  computed: {
    siteInfo() {
      return this.$store.state.siteInfo;
    },
    homeInfo() {
      return this.$store.state.homeInfo;
    },
  },
  data() {
    return {
      titleData: [
        { name: "一般贸易进/出口" },
        { name: "国际/内贸易" },
        { name: "转口贸易" },
        { name: "供应链金融" },
        { name: "仓储/物流/报关服务" },
      ],
      technical_support_data: [
        {
          title: "四周即可上线",
          describe: "云端快速部署，四周起完成实施上线",
          src: require("../assets/img/service1.png"),
        },
        {
          title: "超高性价比",
          describe: "按需配置，无用户数量限制",
          src: require("../assets/img/service2.png"),
        },
        {
          title: "按需灵活配置",
          describe: "功能模块及角色权限组件化，按需灵活配置组件",
          src: require("../assets/img/service3.png"),
        },
        {
          title: "全局式协同",
          describe:
            "多企业、多组织业务数据无缝衔接，信息实时同步，实时了解供应链订单情况",
          src: require("../assets/img/service4.png"),
        },
        {
          title: "便捷操作",
          describe:
            "软件界面简洁易上手，操作快捷方便，培训周期短，无需下载，浏览器打开即可操作使用",
          src: require("../assets/img/service5.png"),
        },
        {
          title: "开放式接口",
          describe:
            "开放多种标准接口，与各类主流系统完美对接，安全、稳定、高效",
          src: require("../assets/img/service6.png"),
        },
        {
          title: "专业级实施",
          describe:
            "由5年以上供应链行业实施经验的专家顾问现场调研、实施，结合企业情况给出行业最佳解决方案",
          src: require("../assets/img/service7.png"),
        },
      ],
      list: [
        {
          title: "数字运营",
          describe:
            "基于产业上下游数据，利用IABCD技术实现产业互联，数据增信，赋能产业升级",
        },
        {
          title: "订单跟踪",
          describe:
            "汇集供应链全流程商流数据、物流数据、资金流数据、信息流数据，使其数字化、可视化",
        },
        {
          title: "实时协作",
          describe:
            "基于公/私有云和移动端，利用实时数据更新，实现从供应商到客户的高效协同",
        },
        {
          title: "智能决策",
          describe:
            "基于沉淀的高质量数据资产引入AI、大数据分析算法，辅助业务决策及智能分析",
        },
      ],
    };
  },
  watch: {},
  mounted() {
    // 监听页面滚动事件
    this.$nextTick(() => {
      window.addEventListener("scroll", this.scrollIndex);
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollIndex);
  },
  methods: {
    scrollIndex() {
      // 滚动条距文档顶部的距离
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 获取所需元素到文档顶部的距离，然后判断滚动条位置让该元素是否固定定位
      let elementScroll = document.querySelector("#homeIndex").offsetTop;
      // 滚动条滚动的距离
      let isShow = scrollTop < elementScroll ? true : false; //6800
      this.$store.commit("setFooterFix", isShow);
    },
  },
};
</script>

<style lang="less" scoped>
@import "index.less";
</style>
