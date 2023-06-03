/**
 * 注意！ 本文件代码用以获取后端数据
 * 为了文件结构而保留，其本身需根据您的需求进行编写
 * 在组件中已经将此部分注释
 * @author xxh 2023-6-3
 */

import httpInstance from "@/utils/http";

// 热评
export function getIndexHot(){
    return httpInstance({
        url:'/api/index/hot',
        method:'get',
    })
}

// 热评
export function getIndexTime(){
    return httpInstance({
        url:'/api/index/time',
        method:'get',
    })
}