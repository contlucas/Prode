import * as jquery from "jquery"

export function callAjax(properties, callback) {
    return jquery.ajax(properties).done(response => {
        callback(response);
    }).fail(reason => {
        callback(reason);
    });
}