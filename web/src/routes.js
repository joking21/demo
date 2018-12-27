import Vue from 'vue';
import Router from 'vue-router';
import homePage from './views/PageHome.vue';
import aboutPage from './views/PageAbout.vue';
import login from './views/PageLogin.vue';
import publish from './views/PagePublish.vue';
import leave from './views/PageLeave.vue';

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
        {
            path:'/login',
            component:login,
            meta:{
                loginIs:true
            }
        },
        {
            path:'/publish',
            component:publish,
            // meta:{
            //     loginIs:true
            // }
        },
        {
            path:'/leaveam',
            component:leave,
        }
    ]
})