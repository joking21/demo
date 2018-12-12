import axios from "axios";
import api from "./api";

const prefix = process.env.NODE_ENV === "development" ? '/dw' : '';
export function postData(url, para, fun) {
    const urlParent = url.split('.')[0];
    const childParent = url.split('.')[1];
    const tempUrl = api[urlParent][childParent];
    axios
        .post(prefix+tempUrl, para)
        .then(function (response) {
            console.log(response);
            if(fun) fun();
        })
        .catch(function (error) {
            console.log(error);
        });
}