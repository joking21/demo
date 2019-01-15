const api = {

    PageCommon: {
      imageUpload: '/files/upload/image',   // 图片上传
    },
    // 登录
    PageLogin: {
        userSelect: '/users/selectall', //查询所有用户
        userAdd: '/users/add', // 用户新增
        login: '/users/login', //添加用户
    },
    // 首页
    PageHome: {
        getNewArticle: '/articles/new/article', //最新的文章
    },
    // 发表文章
    PagePublish: {
        addArticle: '/articles/add', // 添加文章
        getType: '/articles/get/type', // 文章类型
    },
    // 所有文章
    PageArticle: {
         getContent: '/articles/article/info', //详情
         getList: '/articles/article/all'
    },
    PagePersonal: {
        getUser:'/users/selectUser', // 查询某个用户
        updateUser: '/users/updateUser', // 更新用户
        getImg: '/files/image',
    }
}
export default api;