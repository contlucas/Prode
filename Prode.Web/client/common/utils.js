import * as jquery from "jquery"

export function fechingData(props) {
    let headers = new Headers();

    if (props.data) {
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
    }

    let request = new Request(props.url, {
        method: props.method,
        headers: headers,
        mode: "cors",
        cache: "default",
        body: JSON.stringify(props.data)
    });

    return fetch(request).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            console.log("hubo un error al intentar recuperar los datos del servidor");
            return new Error(response.statusText);
        }
    }).catch(reason => {
        return reason;
    });
}
//deprecado
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