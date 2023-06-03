import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Loading from '@/components/Loading.vue'
import Empty from '@/components/Empty.vue'
import Home from '@/views/Home/index.vue'
import Article from '@/views/Article/index.vue'
import ArticleMain from '@/views/Article/components/main/ArticleMain.vue'
import AuthorArticle from '@/views/Article/components/author/AuthorArticleMain.vue'
import Editor from '@/components/article/ArticleEditor.vue'
import Search from '@/views/Search/Search.vue'
import Register from '@/views/Register/Register.vue'
import StepFirst from '@/views/Register/components/Step1.vue'
import StepSecond from '@/views/Register/components/Step2.vue'
import StepThird from '@/views/Register/components/Step3.vue'

import UserHome from '@/views/User/UserHome.vue'
import UserHomeMain from '@/views/User/components/main/UserHomeMain.vue'
import UserTags from '@/views/User/components/left/UserTags.vue'
import UserProfile from '@/views/User/components/left/UserProfile.vue'
import UserArticle from '@/views/User/components/left/UserArticle.vue'

import Admin from '@/views/Admin/index.vue'
import AdminPanel from '@/views/Admin/components/left/AdminPanel.vue'
import AdminProfile from '@/views/Admin/components/left/AdminProfile.vue'
import CheckArticle from '@/views/Admin/components/left/CheckArticle.vue'
import CheckContentment from '@/views/Admin/components/left/CheckContentment.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 一级路由 主页
    {
      path: '/',
      component: Layout,
      // 二级路由
      children: [
        {
          path: '',
          name: 'home',
          component: Home,
          props: true
        },
        {
          path: 'empty',
          component: Empty
        },
        // 浏览文章
        {
          path: 'article',
          component: Article,
          children: [{
            path: '',
            component: ArticleMain,
          },
          {
            path: 'auart',
            component: AuthorArticle,
          }]
        },
        {
          path: 'editor',
          component: Editor
        },
        {
          path: 'search',
          component: Search
        },
        // 注册
        {
          path: 'register',
          component: Register,
          // 存在顺序关系的页面
          children: [{
            path: '',
            component: StepFirst
          },
          {
            path: '2',
            component: StepSecond
          }, {
            path: '3',
            component: StepThird
          }
          ]
        },
        // 普通用户路由
        {
          path: 'userHome',
          component: UserHome,
          // 三级路由 
          children: [{
            path: '',
            component: UserHomeMain
          },
          {
            path: 'tags',
            component: UserTags
          },
          {
            path: 'profile',
            component: UserProfile
          },
          {
            path: 'article',
            component: UserArticle
          },
          ]
        },
        // 管理员路由
        {
          path: 'admin',
          component: Admin,
          // 三级路由
          children: [{
            path: '',
            component: AdminPanel
          },
          {
            path: 'profile',
            component: AdminProfile
          },
          {
            path: 'article',
            component: CheckArticle
          },
          {
            path: 'contentment',
            component: CheckContentment
          },
          ]
        },
      ]
    },
    // 一级路由 登录
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    // 一级路由 加载
    {
      path: '/loading',
      component: Loading
    },
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("token");  // 获取token
  if (to.name != 'login') {  //如果不是去登录页面需要判断是否有token
    // 白名单
    if (to.name == 'home') {
      next()
    }

    if (!token) {
      next({ name: "login" });
    } else {
      next();
    }

  } else {
    next();
  }

})

export default router

