import { Notification } from 'element-ui';
export default {
    methods: {
        success(msg) {
            Notification({
                title: '成功',
                message: msg,
                type: 'success',
                duration: 3000,
            });
        },
        failer(msg) {
            Notification({
                title: '错误',
                message: msg,
                type: 'error',
                duration: 3000,
            });
        }
    }
};