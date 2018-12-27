import axios from "axios";
import api from "./api";
import { success, failer } from './notice';
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
            if (response.data.code === 200) {
                success(response.data.msg);
                if (fun) fun();
            } else {
                failer(response.data.msg);
            }
        })
        .catch(function (error) {
            failer(error.response.data);
        });
}

export function getData(url, para, fun) {
    axios.get(parseUrl(url), {
        params: para
    })
        .then(function (response) {
            if (response.data.code === 200) {
                success(response.data.msg);
                if (fun) fun(response.data);
            } else {
                failer(response.data.msg);
            }
        })
        .catch(function (error) {
            failer(error.response.data);
        });
}