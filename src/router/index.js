import Vue from 'vue'
import Router from 'vue-router'

// 主页以及其子路由
let Index = resolve => require(['@/views/index/index'], resolve)
let Home = resolve => require(['@/views/index/home'], resolve)
let Course = resolve => require(['@/views/index/course'], resolve)
let Path = resolve => require(['@/views/index/path'], resolve)
let Coding = resolve => require(['@/views/index/coding'], resolve)
let Article = resolve => require(['@/views/index/article'], resolve)
let Wenda = resolve => require(['@/views/index/wenda'], resolve)

// 详情
let codeDetail = resolve => require(['@/views/detail/code'], resolve)
let courseDetail = resolve => require(['@/views/detail/course'], resolve)
let typeDetail = resolve => require(['@/views/detail/type'], resolve)

// 搜索
let Search = resolve => require(['@/views/search/search'], resolve)

// 视频
let Video = resolve => require(['@/views/video/video'], resolve)

// 个人中心
let User = resolve => require(['@/views/user/user'], resolve)
let Login = resolve => require(['@/views/user/login'], resolve)
let Cart = resolve => require(['@/views/user/cart'], resolve)

Vue.use(Router)

let routes = [{
    path: '/',
    redirect: '/index'
  }, {
    path: '/index',
    component: Index,
    redirect: '/index/home',
    meta: {
      title: '慕课网'
    },
    children: [{
      path: '/index/home',
      component: Home,
      meta: {
        title: '慕课网'
      },
    }, {
      path: '/index/course',
      component: Course,
      meta: {
        title: '慕课网'
      },
    }, {
      path: '/index/path',
      component: Path,
      meta: {
        title: '慕课网'
      },
    }, {
      path: '/index/coding',
      component: Coding,
      meta: {
        title: '慕课网'
      },
    }, {
      path: '/index/article',
      component: Article,
      meta: {
        title: '慕课网'
      },
    }, {
      path: '/index/wenda',
      component: Wenda,
      meta: {
        title: '慕课网'
      },
    }]
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
    meta: {
      title: '搜索'
    },
  },
  {
    path: '/video/:src',
    name: 'video',
    component: Video,
    meta: {
      title: '视频播放'
    },
  },
  {
    path: '/cdetail/:id',
    name: 'cdetail',
    component: codeDetail,
    meta: {
      title: '实战详情'
    },
  },
  {
    path: '/csdetail/:id',
    name: 'csdetail',
    component: courseDetail,
    meta: {
      title: '课程详情'
    },
  },
  {
    path: '/type/:id',
    name: 'type',
    component: typeDetail,
    meta: {
      title: '类型详情'
    },
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User,
    meta: {
      title: '用户详情'
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: '登录'
    },
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    meta: {
      title: '购物车'
    },
  }
]

export default new Router({
  routes,
  mode: 'history',
})
