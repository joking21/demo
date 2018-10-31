import Vue from 'vue';
import Router from 'vue-router';
import homePage from './views/page/home.vue'
import aboutPage from './views/page/about.vue'
import login from './views/page/login.vue'
Vue.use(Router)

export default new Router({
    mode:'history', //去掉浏览器上面的#
    routes:[
        {
            path:'/',
            component:homePage
        },
        {
            path:'/about',
            component:aboutPage
        },
        // {
        //     path:'/test1',
        //     component:test1,
        //     meta:{
        //         requireAuth:true
        //     }
        // },
        {
            path:'/login',
            component:login,
            meta:{
                loginIs:true
            }
        }
    ]
})