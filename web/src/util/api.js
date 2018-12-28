const api = {
    // 登录
   PageLogin: {
       userSelect: '/users/selectall',
       userAdd: '/users/add',
       login: '/users/login'
    },
    // 发表文章
    PagePublish: {
        addArticle: '/articles/add',
        getType:'/articles/get/type',
        getNewArticle: '/articles/new/article'
    }
}
export default api;