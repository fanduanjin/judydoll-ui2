import Axios from 'axios'
//import { Notification } from '@element-plus/icons-vue';
const axiosInstence=Axios.create({baseURL:'http://jlht.icu:5080/'})

axiosInstence.interceptors.request.use(function(config){
  config.headers["Authorization"]='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHBpcmVfdGltZSI6MTY3NjAzMzkzNjQ5NiwiaWQiOjIsInVzZXJOYW1lIjoiZmFuZHVhbmppbiJ9.M8RWLxmS9yx9GPVRLkJ47EnsInl6y2X7O_SPXcTysqs'
  return config
},function(error){
  return Promise.reject(error);
})



axiosInstence.interceptors.response.use(function (response) {
    let webResult=response.data;
    if(webResult.code==9200){
        return webResult
    }
    return console.warn(webResult);
  }, function (error) {
    return Promise.reject(error);
  });

  
export default axiosInstence