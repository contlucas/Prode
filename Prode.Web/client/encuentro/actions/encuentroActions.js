import dispatcher from "../../dispatcher";
import constantes from "../constants/encuentroConstants";
import { callAjax } from "../../common/utils";

export default {
    saveEncuentro: (encuentro) => {
        callAjax({
            method: "POST",
            url: "http://localhost:49202/api/v1/Encuentros/Create",
            data: encuentro
        }, function (response) {
            dispatcher.dispatch({
                type: constantes.SAVE_ENCUENTRO,
                encuentro: response.Data
            });
        }, function (error) {
            dispatcher.dispatch({
                type: constantes.ERROR_ENCUENTRO,
                error: error.responseJSON
            });
        });
    },
    getEncuentros: () => {
        callAjax({
            method: "GET",
            url: "http://localhost:49202/api/v1/Encuentros/GetAll"
        }, function (response) {
            dispatcher.dispatch({
                type: constantes.GET_ENCUENTROS,
                encuentros: response
            });
        }, function (error) {
            dispatcher.dispatch({
                type: constantes.ERROR_ENCUENTRO,
                error: error.responseJSON
            });
        });
    },
    getEquipos: () => {
        callAjax({
            method: "GET",
            url: "http://localhost:49202/api/v1/Equipos/GetAll"
        }, function (response) {
            dispatcher.dispatch({
                type: constantes.GET_EQUIPOS,
                equipos: response
            });
        }, function (error) {
            dispatcher.dispatch({
                type: constantes.ERROR_ENCUENTRO,
                error: error.responseJSON
            });
        });
    }
}