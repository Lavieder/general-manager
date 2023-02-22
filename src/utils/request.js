/**
 * axios 二次封装
 */

import axios from "axios"
import config from "../config"
const TOKEN_INVALID = 'token认证失败'
const NETWORK_ERROR = '网络连接错误'

// 创建axios实例对象，添加全局配置
const service = axios.create({
  baseURL: config.baseURL,
  timeout: 5000
})

// 请求拦截
service.interceptors.request.use((req) => {
  const headers = req.headers;
  if(headers.Authorization) headers.Authorization = 'Bear Jack'
  return req;
})

// 响应拦截
service.interceptors.response.use((res) => {
  const { code, data, msg } = res.data;
  if(code === 200){
    return data;
  } else if(code === 40001) {
    console.log(TOKEN_INVALID);
    setTimeout(() => {
      console.log('即将跳转。。。');
    }, 3000);
    return Promise.reject(TOKEN_INVALID)
  } else {
    console.log(msg || NETWORK_ERROR);
    return Promise.reject(NETWORK_ERROR)
  }
})

/**
 * 请求核心函数
 * @param {*} options 请求配置 
 */
function request(options) {
  options.method = options.method || 'get'
  if(options.method.toLowerCase() === 'get'){
    options.params = options.data;
  }
  if(config.env === 'prod'){
    service.defaults.baseURL = config.baseURL
  } else {
    service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
  }

  return service(options)
}

['get','post','put','delete','patch'].forEach((item)=>{
  request[item] = (url, data, options) => {
    return request({
      url,
      data,
      method: item,
      ...options
    })
  }
})

export default request

