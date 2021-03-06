import Vue from 'vue'
import Router from 'vue-router'
const routerPush = Router.prototype.push
//解决当请求相同路由出错的问题改变push请求
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
}
Vue.use(Router)

let router =  new Router({
    routes: [
        {
            path:'/',
            name :'index',
            component: () => import('@/views/abnormalLog/index'),
        },
        {
            path:'/virtualMachine',
            name :'index',
            component: () => import('@/views/virtualMachine/index'),
        },
        {
            path:'/resource',
            name :'index',
            component: () => import('@/views/resource/index'),
        },
        {
            path:'/optimization',
            name :'opt',
            component: () => import('@/views/optimization/opt'),
        },
        {
            path:'/capacity',
            name :'cap',
            component: () => import('@/views/capacity/cap'),
        },
        {
            path:'/logExcy',
            name :'index',
            component: () => import('@/views/logExcy/index'),
        },
        // 告警根因分析
        {
            path:'/analysis',
            name :'index',
            component: () => import('@/views/analysis/index'),
        },
        {
            path:'/robots',
            name :'index',
            component: () => import('@/views/robots/index'),
        },
        // 知识库
        {
            path:'/knowledge',
            name :'index',
            component: () => import('@/views/knowledge/index'),
        },
        // 智能投诉分析
        {
            path:'/complaint',
            name :'index',
            component: () => import('@/views/complaint/index'),
        }

        ]
})




export default router
