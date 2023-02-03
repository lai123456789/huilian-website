<template>
  <div class="application">
    <div class="top container hidden-xs-only">
      <img src="@/assets/img/application_logo.png" alt="logo" class="logo" />
      <el-button size="mini" type="primary">获取产品演示</el-button>
    </div>
    <Header
      class="hidden-sm-only hidden-md-only hidden-lg-only hidden-xl-only"
    ></Header>
    <div class="content">
      <el-row class="content_item container" type="flex" align="middle">
        <el-col
          :xs="24"
          :sm="12"
          :md="12"
          :lg="12"
          :xl="12"
          class="hidden-xs-only"
        >
          <div class="content_left">
            <p>新一代数字化供应链管理平台</p>
            <p>NEXTSCM SaaS 2.0</p>
            <p>智能 · 协同 · 生态 · 赋能</p>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <div v-if="showSuccess" class="content_right_success">
            <div>
              <img src="@/assets/img/application_success.png" alt="" />
              <span>申请成功</span>
            </div>
            <div>已收到您提交的信息，我们会尽快与您取得联系</div>
          </div>
          <div v-else class="content_right">
            <div class="content_right_title hidden-xs-only">申请体验</div>
            <div
              class="mobile_application_title hidden-sm-only hidden-md-only hidden-lg-only hidden-xl-only"
            >
              申请免费试用
            </div>
            <div class="content_right_form">
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
              >
                <el-form-item label="" label-width="0px" prop="mobile">
                  <el-input
                    placeholder="请填写您的手机号"
                    v-model="ruleForm.mobile"
                    clearable
                  />
                </el-form-item>
                <el-row :gutter="16" type="flex" justify="space-between">
                  <el-col :span="!disabled ? 17 : 15">
                    <el-form-item label="" label-width="0px" prop="code">
                      <el-input
                        placeholder="请输入验证码"
                        v-model="ruleForm.code"
                        clearable
                      />
                    </el-form-item>
                  </el-col>
                  <el-col :span="!disabled ? 7 : 9">
                    <el-button
                      size="mini"
                      :disabled="disabled"
                      style="height: 40px"
                      @click="validateBtn"
                      >{{ btnTitle }}</el-button
                    >
                  </el-col>
                </el-row>

                <el-form-item label="" label-width="0px" prop="name">
                  <el-input
                    placeholder="请填写完整企业名称"
                    v-model="ruleForm.name"
                    clearable
                  />
                </el-form-item>
                <el-form-item label="" label-width="0px" prop="email">
                  <el-input
                    placeholder="请填写您的邮箱"
                    v-model="ruleForm.email"
                    clearable
                  />
                </el-form-item>
              </el-form>
            </div>
            <div class="read">
              <el-checkbox v-model="checked">
                <span>我已阅读并完全同意</span>
                <span class="active">《服务协议》</span>
                <span>及</span>
                <span class="active">《隐私政策》</span>
              </el-checkbox>
            </div>
            <div class="submit_button">
              <el-button
                style="width: 70%; padding: 10px 0"
                size="mini"
                type="primary"
                round
                @click="submitForm"
                >立即提交</el-button
              >
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Header from "@/components/layout/Header.vue";

export default {
  layout: "blank",
  name: "application",
  components: {
    Header,
  },
  data() {
    return {
      checked: false,
      ruleForm: {
        mobile: "",
        code: "",
        name: "",
        email: "",
      },
      rules: {
        mobile: [
          {
            required: true,
            message: "手机号不能为空",
          },
          {
            pattern: /^[1][3-9][0-9]{9}$/,
            trigger: ["blur", "change"],
            message: "请输入正确手机号码",
          },
        ],
        code: [
          { required: true, message: "验证码不能为空" },
          {
            pattern: /^\d+$/,
            trigger: ["blur", "change"],
            message: "验证码只能填写数字",
          },
        ],
        name: [{ required: true, message: "企业名称不能为空" }],
        email: [
          { required: true, message: "邮箱不能为空" },
          {
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            trigger: ["blur", "change"],
            message: "邮箱格式有误",
          },
        ],
      },
      btnTitle: "验证码",
      disabled: false,
      showSuccess: false,
    };
  },
  head() {
    return {
      title: "申请体验 - 慧链科技",
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: "申请体验",
        },
        {
          hid: "description",
          name: "description",
          content: "申请体验-内容",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    validateBtn() {
      //倒计时
      let time = 5;
      let timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer);
          this.disabled = false;
          this.btnTitle = "验证码";
        } else {
          this.btnTitle = time + "秒后重试";
          this.disabled = true;
          time--;
        }
      }, 1000);
    },
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.showSuccess = true;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
@import "application.less";
</style>
