## Build Setup

```bash
# 安装依赖包
$ npm install --registry=https://registry.npm.taobao.org

# 运行开发模式
$ npm run dev

# 发布到服务器
$ npm run build
$ npm start

# 打包成静态文件发布
$ npm run generate
```

## 项目目录

```
├── assets                     // 静态资源
│   ├── css                       // 样式文件
│   ├── img                       // 图片资源
│   ├── services                  // api请求
│   └── utils                     // 常用工具类
├── components                 // 组件目录
├── layouts                    // 布局目录
├── middleware                 // 中间件目录
├── pages                      // 页面目录
├── plugins                    // 插件目录
├── service                    // 请求数据
├── static                     // 静态文件目录
├── store                      // 全局 store管理
├── .gitignore                 // git 忽略项
├── nuxt.config.js             // 配置文件
└── package.json               // package.json
└── commitlint.config.js       // 代码提交备注规范
```

## 页面开发 PC 端跟移动端适配方法：

```bash
# PC端
$ 1920宽UI设计稿，查看页面元素时，点击 选择开发平台 - 自定义 - CSS REM (输入76) 表示1rem等于76px

# 移动端
$ 750宽设计稿，查看页面元素时，点击 选择开发平台 - 自定义 - CSS REM (输入100) 表示1rem等于100px
$ ps：移动端需要写媒体查询适配兼容，如 @media (max-width: 768px){ } //表示小于ipad的尺寸 768px时，也就是移动端的时候，写个性化代码适配

$ 写在页面代码时，直接根据设计稿的元素1:1写入即可，例如 设计稿上面的按钮宽度显示1rem，页面代码也是写 width: 1rem 即可
```
