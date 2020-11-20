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
        }

        ]
})




export default router
