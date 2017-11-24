/**
 * Created by yhj on 2017/11/7.
 */

/*   后端server五大模块
     {builder}      'http://192.168.13.195:8989/builder/';
     {cloud}        'http://192.168.13.195:8989/cloud/';
     {builderCiVil} 'http://192.168.13.195:8989/builderCiVil/';
     {cas}          'http://192.168.13.195:8989/cas/';
     {palace}       'http://192.168.13.195:8989/palace/';
*/
// basePath('builder');分属模块地址返回
import {basePath} from '../utils/common.js'
import axios from 'axios';

let base = '../../static/workSeting.json';
let route = '../../static/routes.json';
let first,second,third;
// console.log(basePath('builder'),'url');

//egg
// let base = 'http:192.168.13.215:8080/main';
/**
 * axios.get访问的三种形式
 * 1.不带参数
 * 2.参数拼接
 * 3.传入对象
 * */
// export const getWorksetingList = params => axios.get(`${base}`);
// export const getWorksetingList = params => axios.get(`${base}/${params.id}`);
// export const getWorksetingList = params => axios.get(`${base}`,{params:params});
//post方式-->不携带参数 略
// export const getWorksetingList = params => axios.post(`${base}`,params);
//    http://192.168.13.195:8989/cloud/payment/alipay/alipayCloseTradeNotify
export const tests = params=> axios.get(`${params.url}`+"payment/alipay/alipayCloseTradeNotify");
export const getWorksetingList = params => axios.get(`${base}`);
export const getCitys = params => axios.get('../../static/js/citys.json');
export const cloudTree = params=> axios.get("../../static/datasource.json");
export const router = params=> axios.get(`${route}`);
export const getOrderManagementList = params=> axios.get("../../static/datasource.json")
