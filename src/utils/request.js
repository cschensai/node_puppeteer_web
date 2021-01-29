import { BASIC_PREFIX } from "./config";


async function request({ url, params, method = 'get' }) {
  try {
    const formatParams = {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
    }
    if (method.toLowerCase() === 'post') {
      formatParams.body = JSON.stringify(params);
    }
    const res = await fetch(BASIC_PREFIX + url, formatParams)
    const jsonData = await res.json();
    const { code, data } = jsonData || {};
    if (code === 0) {
      return data;
    } else {
      Promise.reject('请求错误', code);
    }
  } catch (error) {
    console.log('error', error);
  }
}

export default request;

