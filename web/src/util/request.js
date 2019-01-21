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
axios.defaults.headers = {
    "Content-Type": "application/json; charset=UTF-8"
}
export function postData(url, para, successFun, errorFun) {
    axios.post(parseUrl(url), para)
        .then(function (response) {
            if (response.data.code === 200) {
                success(response.data.msg);
                if (successFun) successFun();
            } else {
                if (errorFun) errorFun();
                failer(response.data.msg);
            }
        })
        .catch(function (error) {
            if (errorFun) errorFun();
            failer(error.response.data);
        });
}

export function getData(url, para, successFun, errorFun) {
    axios.get(parseUrl(url), {
        params: para
    })
        .then(function (response) {
            if (response.data.code === 200) {
                if (successFun) successFun(response.data);
            } else {
                if (errorFun) errorFun();
                failer(response.data.msg);
            }
        })
        .catch(function (error) {
            if (errorFun) errorFun();
            failer(error.response.data);
        });
}

export function uploadFile(url, para, successFun, errorFun) {
    axios.post(parseUrl(url), para, {
        'Content-Type': 'multipart/form-data'
    })
        .then(function (response) {
            if (response.data.code === 200) {
                success(response.data.msg);
                if (successFun) successFun();
            } else {
                if (errorFun) errorFun();
                failer(response.data.msg);
            }
        })
        .catch(function (error) {
            if (errorFun) errorFun();
            failer(error.response.data);
        });
}
export function getFile(url, para, successFun, errorFun) {
    axios.get(`${parseUrl(url)}/${para}`)
        .then(function (response) {
            if (response.data.code === 200) {
                if (successFun) successFun(response.data);
            } else {
                if (errorFun) errorFun();
                failer(response.data.msg);
            }
        })
        .catch(function (error) {
            if (errorFun) errorFun();
            failer(error.response.data);
        });
}