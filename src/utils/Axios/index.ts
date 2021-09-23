
import Axios from 'axios'

import envInfo from '../envConst'
import {message} from 'antd'

Axios.defaults.timeout = 5000
Axios.defaults.withCredentials = true
// Axios.defaults.baseURL = envInfo[process.env.NODE_ENV]


// 添加请求拦截器
Axios.interceptors.request.use(config => {
    return config;
}, error => {
    console.error("请求拦截捕获错误",error)
    message.error("系统异常")
});

// 添加响应拦截器
Axios.interceptors.response.use(res => {
    if(res.status === 200 ) {
        if(res.data.statusCode === 200) {
            return res.data
        }else {
            message.error(res.data.message)
        }
    }else {
        message.error("系统异常")
        return res
    }
}, error => {
    console.error("响应拦截捕获错误",error)
    message.error("系统异常")
});


export default Axios