<!--客户案例-->
<template>
  <div class="customerCase">
    <div class="main__frame">
      <div class="mask_bg"></div>
      <section class="bannar container">
        <div class="bannar-container">
          <div class="bannar-content">
            <div class="bannar1">
              <p>让数据赋能供应链服务</p>
              <p>依托IABCD先进技术应用，利用大数据辅助决策分析，赋能业务创新</p>
            </div>
            <div class="bannar2 container">
              <el-tabs v-model="modelValue" @tab-click="handleClick">
                <el-tab-pane
                  v-for="(option, index) in tabsData"
                  :key="`tabs_pane_${index}`"
                  :name="`${index}`"
                >
                  <template #label>
                    <span class="bannar2_tabs_label">{{ option.label }}</span>
                  </template>
                  <el-row class="bannar2_tabs_content" :gutter="32">
                    <el-col
                      :xs="24"
                      :sm="6"
                      :md="6"
                      :lg="6"
                      :xl="6"
                      v-for="(item, subIndex) in baseData"
                      :key="subIndex"
                    >
                      <div class="bannar2_tabs_item" @click="goPage">
                        <img :src="item.imgSrc" alt="" />
                        <div>
                          <p>
                            <span>{{ item.name }}</span>
                          </p>
                          <p>{{ item.desc }}</p>
                          <p>了解更多></p>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div id="customerCase2"></div>
  </div>
</template>
<script>
export default {
  components: {},
  name: "customerCase",
  data() {
    return {
      title: "customerCase",
      modelValue: "0",
      tabsData: [
        { label: "全部" },
        { label: "电子" },
        { label: "机械" },
        { label: "煤炭" },
        { label: "塑胶" },
        { label: "建材" },
        { label: "食品" },
        { label: "纺织" },
      ],
      list: [],
      customeCaseData: [
        {
          name: "电子",
          desc: "通过上线慧链科技，工作协同效率大幅提升。",
          imgSrc: require(`@/assets/img/customeCase/custome_case_tab1.png`),
        },
        {
          name: "机械",
          desc: "这家企业，用慧链科技跟踪物流后，降低了30%物流成本。",
          imgSrc: require(`@/assets/img/customeCase/custome_case_tab2.png`),
        },
        {
          name: "食品",
          desc: "这家企业，用慧链科技提高55%库存周转率。",
          imgSrc: require(`@/assets/img/customeCase/custome_case_tab7.png`),
        },
        {
          name: "塑胶",
          desc: "这家企业，使用慧链科技实现了订单效率，提升明显。",
          imgSrc: require(`@/assets/img/customeCase/custome_case_tab4.png`),
        },
        {
          name: "煤炭",
          desc: "这家企业，上线慧链科技后，降低了30%物流成本。",
          imgSrc: require(`@/assets/img/customeCase/custome_case_tab5.png`),
        },
        {
          name: "纺织",
          desc: "这家企业通过慧链科技后，提高98%的跟踪效率。",
          imgSrc: require(`@/assets/img/customeCase/custome_case_tab6.png`),
        },
        {
          name: "机械",
          desc: "这家企业，用慧链科技录入配件数据，提高了90%的订单效率。",
          imgSrc: require(`@/assets/img/customeCase/custome_case_tab3.png`),
        },
        {
          name: "电子",
          desc: "这家企业上线慧链科技降低75%人工成本。",
          imgSrc: require(`@/assets/img/customeCase/custome_case_tab8.png`),
        },
        {
          name: "塑胶",
          desc: "铜鼓慧链科技，这家企业成功降低了75%人工成本。",
          imgSrc: require(`@/assets/img/customeCase/custome_case_tab9.png`),
        },
        {
          name: "电子",
          desc: "这家企业，用慧链科技录入库存数据后，提高了65%的备货预测能力。",
          imgSrc: require(`@/assets/img/customeCase/custome_case_tab12.png`),
        },
        {
          name: "纺织",
          desc: "上线慧链科技后提高了90%的报关效率，降低了50%-80%的价格预警风险。",
          imgSrc: require(`@/assets/img/customeCase/custome_case_tab11.png`),
        },
        {
          name: "建材",
          desc: "这家企业，用慧链科技降低了企业运营风险，提高了86%决策效率。",
          imgSrc: require(`@/assets/img/customeCase/custome_case_tab10.png`),
        },
      ],
      baseData: [],
    };
  },
  head() {
    return {
      title: "客户案例 - 慧链科技",
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: this.siteInfo.seoKey,
        },
        {
          hid: "description",
          name: "description",
          content:
            this.siteInfo.seoDesc ||
            "依托IABCD先进技术应用，利用大数据辅助决策分析，赋能业务创新",
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
  beforeDestroy() {
    //离开这个界面之后，删除滚动事件
    window.removeEventListener("scroll", this.scrollingCustomerCase);
  },
  async mounted() {
    this.baseData = this.customeCaseData;
    this.$nextTick(() => {
      window.addEventListener("scroll", this.scrollingCustomerCase);
    });
  },
  methods: {
    handleClick() {
      if (this.modelValue === "0") {
        this.baseData = this.customeCaseData;
      } else {
        this.baseData = this.customeCaseData.filter(
          (item) => item.name === this.tabsData[this.modelValue].label
        );
      }
    },
    goPage() {
      window.open("/application");
    },
    //滚动事件
    scrollingCustomerCase() {
      // 滚动条距文档顶部的距离
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 获取所需元素到文档顶部的距离，然后判断滚动条位置让该元素是否固定定位
      let elementScroll = document.querySelector("#customerCase2").offsetTop;
      let isShow = scrollTop < elementScroll - 400 ? true : false;
      this.$store.commit("setFooterFix", isShow);
    },
  },
  created() {
    this.title = this.$route.query?.title || "customerCase";
  },
};
</script>
<style lang="less" scoped>
@import "customerCase.less";
</style>
