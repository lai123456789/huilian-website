<template>
  <div class="error container">
    <h1>404</h1>
    <h2>UH OH! 页面丢失</h2>
    <p>您所寻找的页面不存在。你可以点击下面的按钮，返回主页。
    </p>
    <a href="/">
      <button class="btn green">返回首页 </button>
    </a>
  </div>
</template>
<style lang="less" scoped>
.error {
  min-height: 600px;
  text-align: center;
  line-height: 30px;
  padding-top: 50px;
  .btn {
    cursor: pointer;
  }
}
</style>