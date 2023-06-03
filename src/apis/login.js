/**
 * 注意！ 本文件代码用以获取后端数据
 * 为了文件结构而保留，其本身需根据您的需求进行编写
 * 在组件中已经将此部分注释
 * @author xxh 2023-6-3
 */

import httpInstance from "@/utils/http";

//获取用户基本信息
//获取验证码
export function getCaptha(para){
    return httpInstance({
        url:'/anno/captcha',
        responseType: 'blob',
        method:'get',
        params:{
            key:para.value
        }
    })
}
//登录请求
export function login(loginPara){

    return httpInstance({
        url:'/anno/login/',
        method:'post',
        data:loginPara
    })
}