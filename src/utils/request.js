import axios from 'axios'
import {Toast} from 'vant'

const service = axios.create({
  baseURL: '/api',
  timeout: 3000, // 请求超时时间
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

service.interceptors.response.use(
  response => {
    console.log(response)
    if (response.status === 200) {
      return response
    }else {
      Toast(response.data.message || '接口异常！')
    }
  },error => {
    if (error.code === 'ECONNABORTED' || error.message === 'Network Error' || error.message.includes('timeout')) {
      Toast.fail('数据加载中，请检查网络是否正常...');
      // 超时处理 ，返回code: Network Error
      return {
        data: {
          code: 'Network Error'
        }
      };
    }
    return error.response
  }
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    service.get(url, {
      params: params
    }).then(res => resolve(res))
      .catch(err => reject(err))
  })
}

/**
 * post方法，对应post请求 body传参
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    return service({
      url,
      method: 'post',
      data: params,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => resolve(res))
      .catch(err => reject(err))
  })
}

