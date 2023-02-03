<!--产品概览页-->
<template>
  <div class="allproduct">
    <div class="main__frame">
      <section class="bannar">
        <div class="bannar-container">
          <div class="bannar-content">
            <div class="bannar1">
              <p>NEXTSCM</p>
              <p>全新数字化供应链协同平台</p>
            </div>
            <div class="bannar2">高效 · 协同 · 生态 · 赋能</div>
            <div class="bannar3">
              <div class="bannar3_item container">
                <el-row :gutter="48">
                  <el-col
                    :xs="6"
                    :sm="6"
                    :md="6"
                    :lg="6"
                    :xl="6"
                    class="content_center"
                    v-for="(item, index) in dataList"
                    :key="index"
                  >
                    <img :src="item.src" alt="" />
                    <div class="bannar3_item_div">
                      <div class="bannar3_item_div1">
                        {{ item.title }}
                      </div>
                      <div class="bannar3_item_div2 hidden-xs-only">
                        {{ item.describe }}
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="product_introduct" id="highlights">
        <div
          class="product_introduct_title container"
          :class="ishighlights ? 'highlights' : ''"
        >
          产品亮点
        </div>
        <el-row
          :class="ishighlights ? 'highlights' : ''"
          class="product_introduct_content"
        >
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img src="~assets/img/allProduct/allProduct1.png" alt="" />
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="12"
            :lg="12"
            :xl="12"
            class="product_introduct_content_desc_all"
          >
            <div class="product_introduct_content_desc">客户管理</div>
            <el-row :gutter="16">
              <el-col
                :xs="6"
                :sm="8"
                :md="8"
                :lg="8"
                :xl="8"
                v-for="(item, index) in highlightsData1"
                :key="index"
              >
                <div class="product_introduct_content_desc_item">
                  <div></div>
                  <p>{{ item.name }}</p>
                </div>
              </el-col>
              <el-col :xs="6" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="product_introduct_content_desc_item">
                  <p>····</p>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </section>
      <section class="product_introduct bg_white_left" id="order_management">
        <el-row
          :class="!ishighlights ? 'highlights' : ''"
          class="product_introduct_content"
        >
          <el-col
            :xs="24"
            :sm="12"
            :md="12"
            :lg="12"
            :xl="12"
            :order="2"
            class="product_introduct_content_desc_all"
          >
            <div class="product_introduct_content_desc">订单管理</div>
            <el-row :gutter="16">
              <el-col
                :xs="6"
                :sm="8"
                :md="8"
                :lg="8"
                :xl="8"
                v-for="(item, index) in highlightsData2"
                :key="index"
              >
                <div class="product_introduct_content_desc_item">
                  <div></div>
                  <p>{{ item.name }}</p>
                </div>
              </el-col>
              <el-col :xs="6" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="product_introduct_content_desc_item">
                  <p>····</p>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img src="~assets/img/allProduct/allProduct2.png" alt="" />
          </el-col>
        </el-row>
      </section>
      <section class="product_introduct" id="logistics_management">
        <el-row
          :class="!ishighlights ? 'highlights' : ''"
          class="product_introduct_content"
        >
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img src="~assets/img/allProduct/allProduct3.png" alt="" />
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="12"
            :lg="12"
            :xl="12"
            class="product_introduct_content_desc_all"
          >
            <div class="product_introduct_content_desc">物流管理</div>
            <el-row :gutter="16">
              <el-col
                :xs="6"
                :sm="8"
                :md="8"
                :lg="8"
                :xl="8"
                v-for="(item, index) in highlightsData3"
                :key="index"
              >
                <div class="product_introduct_content_desc_item">
                  <div></div>
                  <p>{{ item.name }}</p>
                </div>
              </el-col>
              <el-col :xs="6" :sm="8" :md="8" :lg="8" :xl="8">
                <div class="product_introduct_content_desc_item">
                  <p>····</p>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </section>
      <section class="product_introduct bg_white_right" id="customs_management">
        <el-row class="product_introduct_content">
          <el-col
            :xs="24"
            :sm="12"
            :md="12"
            :lg="12"
            :xl="12"
            class="product_introduct_content_desc_all"
          >
            <div class="product_introduct_content_desc">仓储管理</div>
            <el-row :gutter="16">
              <el-col
                :xs="6"
                :sm="8"
                :md="8"
                :lg="8"
                :xl="8"
                v-for="(item, index) in highlightsData4"
                :key="index"
              >
                <div class="product_introduct_content_desc_item">
                  <div></div>
                  <p>{{ item.name }}</p>
                </div>
              </el-col>
              <el-col :xs="6" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="product_introduct_content_desc_item">
                  <p>····</p>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img src="~assets/img/allProduct/allProduct4.png" alt="" />
          </el-col>
        </el-row>
      </section>
      <section class="product_introduct">
        <el-row class="product_introduct_content">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img src="~assets/img/allProduct/allProduct5.png" alt="" />
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="12"
            :lg="12"
            :xl="12"
            class="product_introduct_content_desc_all"
          >
            <div class="product_introduct_content_desc">报关管理</div>
            <el-row :gutter="16">
              <el-col
                :xs="8"
                :sm="8"
                :md="8"
                :lg="8"
                :xl="8"
                v-for="(item, index) in highlightsData5"
                :key="index"
              >
                <div class="product_introduct_content_desc_item">
                  <div></div>
                  <p>{{ item.name }}</p>
                </div>
              </el-col>
              <el-col :xs="6" :sm="8" :md="8" :lg="8" :xl="8">
                <div class="product_introduct_content_desc_item">
                  <p>····</p>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </section>
      <section class="product_introduct bg_white_left">
        <el-row class="product_introduct_content">
          <el-col
            :xs="24"
            :sm="12"
            :md="12"
            :lg="12"
            :xl="12"
            class="product_introduct_content_desc_all"
          >
            <div class="product_introduct_content_desc">结算管理</div>
            <el-row :gutter="16">
              <el-col
                :xs="6"
                :sm="8"
                :md="8"
                :lg="8"
                :xl="8"
                v-for="(item, index) in highlightsData6"
                :key="index"
              >
                <div class="product_introduct_content_desc_item">
                  <div></div>
                  <p>{{ item.name }}</p>
                </div>
              </el-col>
              <el-col :xs="6" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="product_introduct_content_desc_item">
                  <p>····</p>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img src="~assets/img/allProduct/allProduct6.png" alt="" />
          </el-col>
        </el-row>
      </section>
      <section class="product_introduct">
        <el-row class="product_introduct_content">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img src="~assets/img/allProduct/allProduct7.png" alt="" />
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="12"
            :lg="12"
            :xl="12"
            class="product_introduct_content_desc_all"
          >
            <div class="product_introduct_content_desc">风控管理</div>
            <el-row :gutter="16">
              <el-col
                :xs="6"
                :sm="8"
                :md="8"
                :lg="8"
                :xl="8"
                v-for="(item, index) in highlightsData7"
                :key="index"
              >
                <div class="product_introduct_content_desc_item">
                  <div></div>
                  <p>{{ item.name }}</p>
                </div>
              </el-col>
              <el-col :xs="6" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="product_introduct_content_desc_item">
                  <p>····</p>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </section>
      <section class="product_introduct bg_white_right" id="allproduct">
        <el-row class="product_introduct_content">
          <el-col
            :xs="24"
            :sm="12"
            :md="12"
            :lg="12"
            :xl="12"
            class="product_introduct_content_desc_all"
          >
            <div class="product_introduct_content_desc">财务管理</div>
            <el-row :gutter="16">
              <el-col
                :xs="6"
                :sm="8"
                :md="8"
                :lg="8"
                :xl="8"
                v-for="(item, index) in highlightsData8"
                :key="index"
              >
                <div class="product_introduct_content_desc_item">
                  <div></div>
                  <p>{{ item.name }}</p>
                </div>
              </el-col>
              <el-col :xs="6" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="product_introduct_content_desc_item">
                  <p>····</p>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img src="~assets/img/allProduct/allProduct8.png" alt="" />
          </el-col>
        </el-row>
      </section>
      <section class="product_introduct">
        <el-row class="product_introduct_content">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img src="~assets/img/allProduct/allProduct9.png" alt="" />
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="12"
            :lg="12"
            :xl="12"
            class="product_introduct_content_desc_all"
          >
            <div class="product_introduct_content_desc">智能分析</div>
            <el-row :gutter="16">
              <el-col
                :xs="6"
                :sm="8"
                :md="8"
                :lg="8"
                :xl="8"
                v-for="(item, index) in highlightsData9"
                :key="index"
              >
                <div class="product_introduct_content_desc_item">
                  <div></div>
                  <p>{{ item.name }}</p>
                </div>
              </el-col>
              <el-col :xs="6" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="product_introduct_content_desc_item">
                  <p>····</p>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "allproduct",
  components: {},
  data() {
    return {
      title: "allproduct",
      products: [],
      scrollTop: 0, //分类上间距
      menuCalcsProducts: [],
      noMenuProduct: [],
      dataList: [
        {
          title: "数据驱动",
          describe:
            "汇集供应链全流程商流数据、物流数据、资金流数据、信息流数据，使其数字化、可视化",
          src: require("../../assets/img/allProduct/bannar_icon1.png"),
        },
        {
          title: "实时协作",
          describe:
            "基于公/私有云和移动端，利用实时数据更新，实现从供应商到客户的高效协同",
          src: require("../../assets/img/allProduct/bannar_icon2.png"),
        },
        {
          title: "智能决策",
          describe:
            "基于沉淀的高质量数据资产引入AI、大数据分析算法，辅助业务决策及智能分析",
          src: require("../../assets/img/allProduct/bannar_icon3.png"),
        },
        {
          title: "产融结合",
          describe:
            "基于产业上下游数据，利用IABCD技术实现产业互联，数据增信，赋能产业升级",
          src: require("../../assets/img/allProduct/bannar_icon4.png"),
        },
      ],
      highlightsData1: [
        { name: "客户协同" },
        { name: "商机管理" },
        { name: "报价管理" },
        { name: "合同管理" },
        { name: "业绩管理" },
        { name: "销售分析" },
        { name: "电子签章" },
        { name: "在线对账" },
        { name: "客户评级" },
      ],
      highlightsData2: [
        { name: "订单执行" },
        { name: "订单跟踪" },
        { name: "单证导出" },
        { name: "订单归集" },
        { name: "订单预警" },
        { name: "订单分析" },
      ],
      highlightsData3: [
        { name: "运输计划" },
        { name: "发货管理" },
        { name: "在途管理" },
        { name: "移动签收" },
        { name: "回单管理" },
        { name: "全程跟踪" },
      ],
      highlightsData4: [
        { name: "出/入库管理" },
        { name: "库内服务" },
        { name: "计费管理" },
        { name: "库存管理" },
        { name: "盘点管理" },
      ],
      highlightsData5: [
        { name: "自动报关" },
        { name: "单一窗口" },
        { name: "报关审价" },
        { name: "单证套打" },
        { name: "价格预警" },
        { name: "退税管理" },
      ],
      highlightsData6: [
        { name: "协议管理" },
        { name: "应收/付管理" },
        { name: "对账管理" },
        { name: "发票管理" },
        { name: "收款核销" },
        { name: "逾期管理" },
      ],
      highlightsData7: [
        { name: "准入管理" },
        { name: "黑/白名单" },
        { name: "授信管理" },
        { name: "逾期管理" },
        { name: "风险分析" },
      ],
      highlightsData8: [
        { name: "凭证管理" },
        { name: "银企直连" },
        { name: "收/付款管理" },
        { name: "票据管理" },
        { name: "信用证管理" },
        { name: "资金管理" },
      ],
      highlightsData9: [
        { name: "订单分析" },
        { name: "运营分析" },
        { name: "财务分析" },
        { name: "服务商KPI" },
        { name: "资金分析" },
        { name: "智能看板" },
      ],
      ishighlights: false,
      highlightsNum: 0,
      logisticsNum: 0,
      customsNum: 0,
    };
  },
  head() {
    return {
      title: "产品概览 - 慧链科技",
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: this.siteInfo.seoKey,
        },
        {
          hid: "description",
          name: "description",
          content: this.siteInfo.seoDesc || "慧链科技",
        },
      ],
    };
  },
  computed: {
    siteInfo() {
      return this.$store.state.siteInfo;
    },
    menus() {
      return this.$store.state.menus;
    },
    menuCalcs() {
      return this.$store.state.menuCalcs;
    },
  },
  async asyncData(that) {
    // const res = await that.store.dispatch("getProducts");
    // let noMenuProduct = []; //没有分类的产品
    // console.log(res);
    // res.forEach((item) => {
    //   if (!Array.isArray(item.imgs)) {
    //     item.imgs = JSON.parse(item.imgs || "[]");
    //   }
    //   if (!item.menu) {
    //     noMenuProduct.push(item);
    //   }
    // });
    // let menuProducts = []; //分类和产品列表
    // let menuCalcsProducts = []; //有层级的分类
    // that.store.state.menus.map((item) => {
    //   item["products"] = [];
    //   item["children"] = [];
    //   res.forEach((item2) => {
    //     if (item._id == item2.menu) {
    //       item2["menuName"] = item.name;
    //       item.products.push(item2);
    //     }
    //   });
    //   if (item.products.length > 0) {
    //     menuProducts.push(item);
    //   }
    //   if (!item.parentId) {
    //     menuCalcsProducts.push(item);
    //   }
    //   //
    // });
    // menuCalcsProducts.forEach((item1) => {
    //   menuProducts.map((item2) => {
    //     if (item1._id == item2.parentId) {
    //       item1.children.push(item2);
    //     }
    //   });
    // });
    // return {
    //   menuCalcsProducts: menuCalcsProducts,
    //   noMenuProduct,
    // };
  },
  async created() {
    this.title = this.$route.query?.title || "allproduct";
  },
  beforeDestroy() {
    //离开这个界面之后，删除滚动事件
    window.removeEventListener("scroll", this.scrollingAllproduct);
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("scroll", this.scrollingAllproduct);
    });
  },
  methods: {
    //滚动事件
    scrollingAllproduct() {
      // 滚动条距文档顶部的距离
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 获取所需元素到文档顶部的距离，然后判断滚动条位置让该元素是否固定定位
      let elementScroll = document.querySelector("#allproduct").offsetTop;
      let isShow = scrollTop < elementScroll ? true : false;
      this.$store.commit("setFooterFix", isShow);

      // 根据滚动条高度 监听动画效果
      if (scrollTop < 100) {
        this.highlightsNum = 0;
        this.logisticsNum = 0;
        this.customsNum = 0;
      }
      let highlights = document.querySelector("#highlights").offsetTop;
      let order_management =
        document.querySelector("#order_management").offsetTop;
      let logistics_management = document.querySelector(
        "#logistics_management"
      ).offsetTop;
      let customs_management = document.querySelector(
        "#customs_management"
      ).offsetTop;
      // 产品亮点
      if (
        scrollTop > 300 &&
        scrollTop < order_management &&
        this.highlightsNum === 0
      ) {
        this.ishighlights = !this.ishighlights;
        this.highlightsNum = 1;
        this.logisticsNum = 0;
        this.customsNum = 0;
      }
      // 订单管理
      if (
        scrollTop > highlights + 300 &&
        scrollTop < logistics_management &&
        this.logisticsNum === 0
      ) {
        this.ishighlights = !this.ishighlights;
        this.logisticsNum = 1;
        this.highlightsNum = 0;
        this.customsNum = 0;
      }
      // 物流管理
      if (
        scrollTop > logistics_management + 300 &&
        scrollTop < customs_management &&
        this.customsNum === 0
      ) {
        this.ishighlights = !this.ishighlights;
        this.highlightsNum = 0;
        this.logisticsNum = 0;
        this.customsNum = 1;
      }
    },
  },
};
</script>
<style lang="less" scoped>
@import "allproduct.less";
</style>
