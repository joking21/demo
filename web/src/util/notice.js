import { Notification, Message } from 'element-ui';
export function success(msg) {
    Notification({
        title: '成功',
        message: msg,
        type: 'success',
        duration: 3000,
    });
};
export function failer(msg) {
    Notification({
        title: '错误',
        dangerouslyUseHTMLString: true,
        message: '<div v-html='+msg+'></div>',
        type: 'error',
        duration: 3000,
    });
};
export function warningTip(msg) {
    Message({
        showClose: true,
        message: msg,
        type: 'warning',
        duration: 3000,
    });
};