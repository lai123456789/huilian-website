<!--底部文案-->
<template>
  <footer class="Footer">
    <div class="eSEDIi" id="footer">
      <div class="dKGIFF" :class="isFixed ? 'fixed' : ''" id="footerBar">
        <div class="kNxEvE">
          <img class="cabJYt" src="~assets/img/phone.png" /><span class="text"
            >137-1421-5685</span
          >
        </div>
        <div class="kNxEvE" @click="showWechat = !showWechat">
          <img class="cabJYt" src="~assets/img/wechat.png" /><span class="text"
            >微信咨询</span
          >
          <img
            v-show="showWechat"
            class="buhDzO"
            src="~assets/img/wechat_concat.png"
          />
        </div>
        <div class="kNxEvE">
          <a @click="goApply"><button class="bYQysj">获取产品演示</button></a>
        </div>
      </div>
      <div class="bottom_content container">
        <el-row
          class="bottom_content_item"
          :gutter="48"
          type="flex"
          justify="space-between"
        >
          <el-col :xs="8" :sm="4" :md="4" :lg="4" :xl="4">
            <div class="item_title">关于慧链</div>
            <p><router-link to="/about">公司介绍</router-link></p>
            <p><router-link to="/about">成长故事</router-link></p>
            <p><router-link to="/about">发展历程</router-link></p>
            <p><router-link to="/about">荣誉资质</router-link></p>
            <p
              class="hidden-sm-only hidden-md-only hidden-lg-only hidden-xl-only"
            >
              <router-link to="/allproduct" style="color: #0299fb"
                >了解更多></router-link
              >
            </p>
          </el-col>

          <el-col
            :xs="8"
            :sm="4"
            :md="4"
            :lg="4"
            :xl="4"
            class="hidden-xs-only"
          >
            <div class="item_title">咨询&活动</div>
            <p><router-link to="/about">行业咨询</router-link></p>
            <p><router-link to="/about">产品动态</router-link></p>
          </el-col>

          <el-col
            :xs="8"
            :sm="4"
            :md="4"
            :lg="4"
            :xl="4"
            class="hidden-xs-only"
          >
            <div class="item_title">案例&资料</div>
            <p>
              <router-link to="/about">电子</router-link>
              <router-link to="/about" style="margin-left: 0.3rem"
                >煤炭</router-link
              >
            </p>
            <p>
              <router-link to="/about">机械</router-link>
              <router-link to="/about" style="margin-left: 0.3rem"
                >建材</router-link
              >
            </p>
            <p><router-link to="/about">塑胶</router-link></p>
          </el-col>

          <el-col
            :xs="8"
            :sm="4"
            :md="4"
            :lg="4"
            :xl="4"
            class="hidden-xs-only"
          >
            <div class="item_title">服务支持</div>
            <p><router-link to="/about">服务内容</router-link></p>
            <p><router-link to="/about">收费标准</router-link></p>
            <p><router-link to="/about">运维支持热线</router-link></p>
          </el-col>

          <el-col :xs="8" :sm="4" :md="4" :lg="4" :xl="4">
            <div class="item_title">热门产品</div>
            <p><router-link to="/about">供应链管理平台</router-link></p>
            <p><router-link to="/about">产业互联网平台</router-link></p>
          </el-col>

          <el-col
            :xs="8"
            :sm="4"
            :md="4"
            :lg="4"
            :xl="4"
            class="hidden-sm-only hidden-md-only hidden-lg-only hidden-xl-only"
          >
            <div class="bottom_content_item2">
              <div class="bottom_content_item2_right">
                <div class="bottom_content_item2_right_item">
                  <img src="@/assets/img/wechat_public_number.png" alt="" />
                  <div>微信公众号</div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row
          class="hidden-xs-only bottom_content_item2"
          type="flex"
          justify="space-between"
        >
          <el-col :xs="8" :sm="19" :md="19" :lg="19" :xl="19">
            <div class="item_title">联系我们</div>
            <div
              class="bottom_content_item2_item"
              style="margin-top: 0.4rem; margin-bottom: 0.1rem"
            >
              <div class="contact_content" style="width: 3rem">
                <img src="@/assets/img/bottom_icon1.png" alt="" />
                <div>
                  <p>137-1421-5685</p>
                  <p>137-1428-8251</p>
                </div>
              </div>
              <div class="contact_content" style="flex: 1">
                <img src="@/assets/img/bottom_icon2.png" alt="" />
                <div><p>vip@nextscm.com.cn</p></div>
              </div>
            </div>

            <div class="bottom_content_item2_item">
              <div class="contact_content" style="width: 3rem">
                <img src="@/assets/img/bottom_icon3.png" alt="" />
                <div><p>www.nextscm.com.cn</p></div>
              </div>
              <div class="contact_content" style="flex: 1">
                <img src="@/assets/img/bottom_icon4.png" alt="" />
                <div><p>深圳市福田区卓越城一期三栋1603室</p></div>
              </div>
            </div>
          </el-col>
          <el-col :xs="8" :sm="5" :md="5" :lg="5" :xl="5">
            <div class="bottom_content_item2_right">
              <div class="bottom_content_item2_right_item">
                <img src="@/assets/img/wechat_public_number.png" alt="" />
                <div>微信公众号</div>
              </div>

              <div class="bottom_content_item2_right_item">
                <img src="@/assets/img/website_logo.png" alt="" />
                <div>扫码体验</div>
              </div>
            </div>
          </el-col>
        </el-row>
        <div
          class="hidden-sm-only hidden-md-only hidden-lg-only hidden-xl-only mobile_bottom_content"
        >
          <div></div>
          <!-- <img src="@/assets/img/mobile_text_logo.png" alt="" /> -->
          <div>慧达于心 链创未来</div>
        </div>
        <div class="copyright">
          <span>©️深圳慧链科技有限公司 版权所有</span>
          <a href="http://beian.miit.gov.cn/" target="_blank"
            >备案/许可证编号：粤ICP备2022146721号</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      showWechat: false,
    };
  },
  computed: {
    siteInfo() {
      return this.$store.state.siteInfo;
    },
    isFixed() {
      return this.$store.state.footerFix;
    },
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
  async mounted() {},
};
</script>
<style lang="less" scoped>
@import "Footer.less";
</style>
