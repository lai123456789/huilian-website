<!--标题栏-->
<template>
  <header class="Header">
    <div class="Header_frame pc">
      <div class="pc_frame container">
        <img
          class="logo"
          src="../../assets/img/logo.png"
          alt="logo"
          @click="clickLogo"
        />
        <nav class="nav">
          <div
            class="nav_li"
            v-for="(item, index) in siteInfo.navs"
            :key="'nav' + index"
          >
            <router-link
              v-if="index !== 3"
              class="li"
              active-class="clickActive"
              exact
              :to="item.to + '?title=' + item.name"
              >{{ item.name }}</router-link
            >
            <a v-else class="link" @click="goApply">NEXTSCM 协同云平台</a>
          </div>
        </nav>
        <div class="right_product">
          <div class="product_demonstration" @click="goApply">获取产品演示</div>
          <!-- <button class="bYQysj">获取产品演示</button> -->
        </div>
        <!-- <div ref="google_translate_element1"></div> -->
      </div>
    </div>
    <div class="Header_frame mobile">
      <div class="container mobile_frame">
        <div>
          <img
            class="more active-bg"
            :src="
              !showMoNav
                ? require('@/assets/img/mobile_home.png')
                : require('@/assets/img/close_home.png')
            "
            @click="showMoNav = !showMoNav"
          />
          <!-- siteInfo.logo -->
          <img
            class="logo active-bg"
            v-if="siteInfo.logo"
            src="../../assets/img/logo.png"
            alt="logo"
            @click="clickLogo"
          />
        </div>
        <div>
          <button class="bYQysj" @click="goApply">获取产品演示</button>
        </div>
      </div>
      <div
        class="mobile_pop"
        :class="{ show: showMoNav }"
        @click="showMoNav = false"
      >
        <div class="mo_nav_frame" :class="{ show: showMoNav }" @click.stop>
          <router-link
            v-for="(item, index) in siteInfo.navs"
            :key="'nav' + index"
            :active-class="index !== 3 ? 'clickActive' : ''"
            exact
            class="mo_nav_panel"
            :to="item.to + '?title=' + item.name"
            :style="{ color: index === 3 ? '#0299fb' : '' }"
          >
            <span class="li">{{ item.name }}</span>
          </router-link>
          <div class="mo_nav_panel">
            <div ref="google_translate_element2"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="occ pc"></div>
    <div class="occ mobile"></div>
  </header>
</template>
<script>
export default {
  name: "Header",
  props: {
    // 网站配置信息
    sizeInfo: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ismobile() {
      return this.$store.state.ismobile;
    },
    siteInfo() {
      return this.$store.state.siteInfo;
    },
    menuCalcs() {
      return this.$store.state.menuCalcs;
    },
    menus() {
      return this.$store.state.menus;
    },
    vides() {
      return this.$store.state.menus;
    },
  },
  data() {
    return {
      showMoNav: false,
      navActive: 0, //导航栏所在索引
    };
  },
  watch: {
    $route(val) {
      this.showMoNav = false;
    },
  },
  async mounted() {
    //实例化谷歌插件
    // 轮询谷歌插件是否加载完成
    // let timer = setInterval(() => {
    //   try {
    //     if (google != undefined) {
    //       if (google.translate.TranslateElement) {
    //         if (!this.ismobile) {
    //           new google.translate.TranslateElement(
    //             {
    //               // pageLanguage: "zh",
    //               //自动显示翻译横幅，就是翻译后顶部出现的那个，有点丑，这个属性没有用的话，请看文章底部的其他方法
    //               autoDisplay: true,
    //               layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    //             },
    //             this.$refs.google_translate_element1
    //           );
    //         } else {
    //           new google.translate.TranslateElement(
    //             {
    //               // pageLanguage: "zh",
    //               //自动显示翻译横幅，就是翻译后顶部出现的那个，有点丑，这个属性没有用的话，请看文章底部的其他方法
    //               autoDisplay: true,
    //               layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    //             },
    //             this.$refs.google_translate_element2
    //           );
    //         }
    //         clearInterval(timer);
    //         timer = null;
    //       }
    //     }
    //   } catch {}
    // }, 1000);
    // // 60秒谷歌翻译未加载出来清除轮询
    // setTimeout(() => {
    //   clearInterval(timer);
    //   timer = null;
    // }, 60000);
    // 获取视频列表
    // await this.$store.dispatch("getVideos");
  },
  methods: {
    clickLogo() {
      this.$router.push("/");
    },
    goApply() {
      const url = `/application`;
      window.open(url);
    },
  },
};
</script>
<style lang="less" scoped>
@import "Header.less";
</style>
