import * as jquery from "jquery"

export function TestearJquery() {
    jquery.ajax({
        method: "GET",
        url: "http://localhost:49202/api/v1/Equipos/GetAll"
    }).done(response => {
        console.log(response);
    }).fail(reason => {
        console.log(reason);
    });
}

export function SaveEquipoJquery(nombre) {
    return jquery.ajax({
        method: "POST",
        url: "http://localhost:49202/api/v1/Equipos/Create",
        data: { Nombre: nombre }
    }).done(response => {
        console.log(response);
    }).fail(reason => {
        console.log(reason);
    });
}