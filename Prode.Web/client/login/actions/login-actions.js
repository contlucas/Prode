import dispatcher from "dispatcher";
import { fechingData } from "utils";
import apiProdeConfig from "rest-api-prode-config";

export default {
    Login: (user) => {
        console.log("usuario: ", user);
        console.warn("desarrollar web apilogin")
        //fechingData({
        //    url: apiProdeConfig.login.login.url,
        //    method: apiProdeConfig.login.login.method,
        //    data: user
        //}).then(result => {
        //    dispatcher.dispatch({
        //        type: constants.LOGIN_SUCCEED,
        //        encuentro: result.Data
        //    });
        //}).catch(reason => {
        //    dispatcher.dispatch({
        //        type: constants.ERROR_LOGIN,
        //        error: reason
        //    });
        //});
    }
}