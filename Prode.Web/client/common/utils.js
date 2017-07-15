import * as jquery from "jquery"

export function callAjax(properties, callback, callbackError) {
    return jquery.ajax(properties).done(response => {
        callback(response);
    }).fail(reason => {
        callbackError(reason);
    });
}

export function formateDate(date) {
    return new Date(parseInt(date.match(/\d+/)[0]));
}