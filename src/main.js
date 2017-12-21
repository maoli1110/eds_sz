import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store'
import axios from 'axios';
import ElementUI from 'element-ui';
import directive from 'utils/directive.js';
import $ from 'jquery';
// import 'element-ui/lib/theme-default/index.css';    // 默认主题
import '../static/css/theme-green/index.css';       // 浅绿色主题
import '../static/zTree/js/jquery.ztree.all.min.js';
import VueScrollbar from'../static/scroll/vue-scrollbar.vue';
import '../static/js/select-vue-component.js'; //vue多选参照select2
import "babel-polyfill";
import '../static/js/jbase64';
Vue.use(ElementUI);
Vue.component('vue-scrollbar', VueScrollbar)
Vue.prototype.$axios = axios;
// import global_ from './global.vue'//引用config文件
// Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

//获取接口地址
// let currentUrlPath = window.location.host;
let currentUrlPath = 'http://192.168.13.195:8080/'; 
axios.get(currentUrlPath +'pds/rs/centerLogin/serverurl').then((res)=>{
	console.log(currentUrlPath,'currentUrlPath')
	let serverPath = res.data;
	serverPath.forEach((value,key)=>{
		switch (value.serverName){
			case 'cas':
			window.serverPath.casUrl = value.serverURL;
			break;
			case 'builder':
			window.serverPath.builderUrl = value.serverURL;
			break;
			case 'cloud':
			window.serverPath.cloudUrl = value.serverURL;
			break;
			case 'civil':
			window.serverPath.civilUrl = value.serverURL;
			break;
		}
	});
	console.log(window.serverPath,'window.serverPath');
});
/**
 * http拦截器
 * Add a request interceptor
 */
axios.interceptors.request.use(function (config) {
	// Do something before request is sent
	console.log(config)
	return config;
}, function (error) {
	// Do something with request error
	return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
	// Do something with response data
	return response;
}, function (error) {
	// Do something with response error
	return Promise.reject(error);
});
