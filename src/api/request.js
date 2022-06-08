import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

// 创建实例
const requests = axios.create({
  baseURL: "api",
  timeout: 30000,
});

// 请求拦截器
requests.interceptors.request.use((config) => {
  nprogress.start()
  return config;
});

// 响应拦截器
requests.interceptors.response.use(
  (res) => {
    nprogress.done()
    return res.data;
  },
  (error) => {
    return Promise.reject(new Error("request faile."));
  }
);

export default requests;