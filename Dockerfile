#1、基于镜像node，版本选择合适稳定版本即可
FROM node:alpine
#2、作者
MAINTAINER ZengKui
#3、参数,node的环境为生产环境
ENV NODE_ENV=production
#4、任意ipENV HOST 0.0.0.0
#5、容器内创建目录app
RUN mkdir -p /app
#6、复制当前的内容到容器内容部目录app
COPY . /app
#7、切换工作目录到app
WORKDIR /app
#8、暴露端口5000，默认端口
EXPOSE 5000
#10、清除缓存
RUN npm cache clean --force
#11、安装依赖
RUN npm install --no-package-lock --registry=https://registry.npm.taobao.org
#12、构建,生成dist文件
RUN npm run build
#13、start
CMD ["npm","start"] 