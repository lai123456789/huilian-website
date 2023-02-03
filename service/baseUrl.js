let baseURL = "";
// 本地环境
if (process.env.NODE_ENV === "development") { // 测试环境
  // baseURL = "https://ppg-2grw6ttyc107614c-1257508956.ap-guangzhou.app.tcloudbase.com";  // 测试环境
  baseURL = "https://bds-4g0z8mtq63f02552-1258872435.ap-guangzhou.app.tcloudbase.com" //bds生产环境
}
//生产环境
else if (process.env.NODE_ENV === "production") {
  baseURL = "https://bds-4g0z8mtq63f02552-1258872435.ap-guangzhou.app.tcloudbase.com" //bds
}
export default baseURL;