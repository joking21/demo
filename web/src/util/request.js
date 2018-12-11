import axios from "axios";
import api from "./api";
export function postData(url,para) {
    console.log(url);
    const urlParent = url.split('.')[0];
    const childParent = url.split('.')[1];
    const tempUrl = api[urlParent][childParent];
    console.log(tempUrl);
    // axios
    //     .post(url, para)
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
}