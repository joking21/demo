import Vue from 'vue';
import Router from 'vue-router';
import homePage from './views/PageHome.vue';
import aboutPage from './views/PageAbout.vue';
import login from './views/PageLogin.vue';
import publish from './views/PagePublish.vue';
import leave from './views/PageLeave.vue';
import articleContent from './views/PageContent.vue';
import Register from './views/PageRegister.vue';
import article from './views/PageArticle.vue';

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
            path:'/register',
            component:Register,
        },
        {
            path:'/publish',
            component:publish,
            meta:{
                requireAuth:true
            }
        },
        {
            path:'/leaveam',
            component:leave,
        },
        {
            name: 'articleContent',
            path:'/article/detail/:id',
            component:articleContent
        },
        {
            path:'/article',
            component:article
        },
    ]
})