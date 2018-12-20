import axios from "axios";
import api from "./api";
import notice from './notice';
const prefix = process.env.NODE_ENV === "development" ? '/dw' : '/api';
function parseUrl(url) {
    const urlParent = url.split('.')[0];
    const childParent = url.split('.')[1];
    const tempUrl = api[urlParent][childParent];
    return prefix + tempUrl;
}
export function postData(url, para, fun) {
    axios.post(parseUrl(url), para)
        .then(function (response) {
            notice.methods.success(response.data.msg);
            if (fun) fun();
            // if(response.data.code === 200){
            //     notice.methods.success(response.data.msg);
            //     if(fun) fun();
            // }else{
            //      notice.methods.failer(response.data.msg);
            // }
        })
        .catch(function (error) {
            notice.methods.failer(error.response.data);
        });
}

export function getData(url, para, fun) {
    axios.get(parseUrl(url), {
        params: para
    })
        .then(function (response) {
            if (response.data.code === 200) {
                notice.methods.success(response.data.msg);
                if (fun) fun();
            } else {
                notice.methods.failer(response.data.msg);
            }
        })
        .catch(function (error) {
            notice.methods.failer(error.response.data);
        });
}