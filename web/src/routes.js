import Vue from 'vue';
import Router from 'vue-router';
import PageHome from './views/PageHome.vue';
import PageAbout from './views/PageAbout.vue';
import PageLogin from './views/PageLogin.vue';
import PageLeave from './views/PageLeave.vue';
import PageContent from './views/PageContent.vue';
import Register from './views/PageRegister.vue';
import PageArticle from './views/PageArticle.vue';
import PagePersonal from './views/PagePersonal.vue';
import PageTest from './views/PageTest.vue'

Vue.use(Router)

export default new Router({
    mode:'history', //去掉浏览器上面的#
    routes:[
        {
            path:'/',
            component:PageHome
        },
        {
            path:'/about',
            component:PageAbout
        },
        {
            path:'/login',
            component:PageLogin,
            meta:{
                loginIs:true
            }
        },
        {
            path:'/register',
            component:Register,
        },
        {
            path:'/leaveam',
            component:PageLeave,
        },
        {
            name: 'articleContent',
            path:'/article/detail/:id',
            component:PageContent
        },
        {
            path:'/article',
            component:PageArticle
        },
        {
            path:'/personal',
            component:PagePersonal
        }, 
        {
            path:'/test',
            component:PageTest
        },
    ]
})