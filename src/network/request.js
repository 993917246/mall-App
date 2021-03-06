//数据请求的封装
import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL : "http://152.136.185.210:8000/api/w6" ,
    timeout : 5000
  })

  //请求拦截
  instance.interceptors.request.use(config => {
    return config
  },err => {

  })

  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },err => {

  })

  //发送真正的请求
  return instance(config)
}