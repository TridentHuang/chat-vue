import axios from 'axios'

axios.defaults.timeout = 500000;                        //响应时间
axios.defaults.baseURL = 'admin';   //配置接口地址


//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
    console.log("res")
    //对响应数据做些事
    if (!res.data.success) {
        return Promise.resolve(res);
    }
    return res;
}, (error) => {
    console.log('网络异常')
    return Promise.reject(error);
});

//返回一个Promise(发送post请求)
export function fetchPost(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}


//返回一个Promise(发送post请求)
export function uploadPost(url, formData) {

    return new Promise((resolve, reject) => {
        axios.post(url, formData, {
            "Content-Type": "multipart/form-data;charset=utf-8"
        }).then(response => {
            resolve(response);
        }, err => {
            reject(err);
        }).catch((error) => {
            reject(error)
        })
    })
}


// 返回一个Promise(发送get请求)
export function fetchGet(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, {params: param})
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export default {
    fetchPost,
    uploadPost,
    fetchGet,
}
