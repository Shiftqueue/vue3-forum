/**
 * 注意！ 本文件代码用以获取后端数据
 * 为了文件结构而保留，其本身需根据您的需求进行编写
 * 在组件中已经将此部分注释
 * @author xxh 2023-6-3
 */

// 获取文章信息
import httpInstance from "@/utils/http";

// 根据aid 获取文章信息
export function getArticleDetails(aid) {
    return httpInstance({
        url: `/article/${aid}`,
        method: 'get'
    });
}
// 获取主页文章信息
export function getHomeArticleDetails(aid) {
    return httpInstance({
        url: `/api/article/${aid}`,
        method: 'get'
    });
}

// 新增文章
export function addArticle(article) {
    return httpInstance({
        url: `/article/`,
        method: 'post',
        data:article
    });
}

// 修改文章
export function modifyArticle(article) {
    return httpInstance({
        url: `/article/`,
        method: 'put',
        data:article
    });
}


// 获取所有的分类信息
export function getTypes() {
    return httpInstance({
        url: `/type/anno/typelist`,
        method: 'get',
    });
}

// 用户删除这篇文章
export function deleteArt(aid) {
    return httpInstance({
        url: `/article/${aid}`,
        method: 'delete',
    });
}

// 获取已过审文章评论信息
export function getPublicContentment(aid) {
    return httpInstance({
        url: `/comment/anno/${aid}`,
        method: 'get',
    });
}

// 回复评论信息
export function postSendMag(send) {
    return httpInstance({
        url: `/comment`,
        method: 'post',
        data:send
    });
}

// 删除评论信息
export function deleteSendMag(comId) {
    return httpInstance({
        url: `/comment/${comId}`,
        method: 'delete',
    });
}