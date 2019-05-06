const api = {

    PageCommon: {
      imageUpload: '/files/upload/image',   // 图片上传
    },
    // 登录
    PageLogin: {
        userSelect: '/users/list', //查询所有用户
        userAdd: '/users/add', // 用户新增
        login: '/users/login', //添加用户
    },
    // 首页
    PageHome: {
        getNewArticle: '/articles/new', //最新的文章
    },
    // 发表文章
    PagePublish: {
        addArticle: '/articles/add', // 添加文章
        getType: '/articles/type', // 文章类型
    },
    // 所有文章
    PageArticle: {
         getContent: '/articles/detail', //详情
         getList: '/articles/list' // 文章列表
    },
    // 留言
    PageLeaveAm: {
        getMessage: '/leaveam/list', // 留言列表
        addMessage: '/leaveam/add', // 新增留言
        deleteMessage: '/leaveam/delete', // 删除留言
        selectByUser: '/leaveam/selectByUser' //查询某个用户的留言
    },
    // 个人中心
    PagePersonal: {
        getUser:'/users/single', // 查询某个用户
        updateUser: '/users/update', // 更新用户
        getImg: '/files/image',  // 获取上传图片
        getArticleByme: '/articles/personal', // 获取个人文章
        updateArticle: '/articles/update', // 修改文章
        deleteArticle: '/articles/delete', // 删除文章
    }
}
export default api;