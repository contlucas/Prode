import dispatcher from "dispatcher";
import constants from "../constants/encuentro-constants";
import { fechingData } from "utils";
import apiProdeConfig from "rest-api-prode-config";

export default {
    saveEncuentro: (encuentro) => {
        fechingData({
            url: apiProdeConfig.encuentro.create.url,
            method: apiProdeConfig.encuentro.create.method,
            data: encuentro
        }).then(result => {
            dispatcher.dispatch({
                type: constants.SAVE_ENCUENTRO,
                encuentro: result.Data
            });
        }).catch(reason => {
            dispatcher.dispatch({
                type: constants.ERROR_ENCUENTRO,
                error: reason
            });
        });
    },
    getEncuentros: () => {
        fechingData({
            url: apiProdeConfig.encuentro.getAll.url,
            method: apiProdeConfig.encuentro.getAll.method
        }).then(result => {
            dispatcher.dispatch({
                type: constants.GET_ENCUENTROS,
                encuentros: result
            });
        }).catch(reason => {
            dispatcher.dispatch({
                type: constants.ERROR_ENCUENTRO,
                error: reason
            });
        });
    },
    getEquipos: () => {
        fechingData({
            url: apiProdeConfig.equipo.getAll.url,
            method: apiProdeConfig.equipo.getAll.method
        }).then(result => {
            dispatcher.dispatch({
                type: constants.GET_EQUIPOS,
                equipos: result
            });
        }).catch(reason => {
            dispatcher.dispatch({
                type: constants.ERROR_ENCUENTRO,
                error: reason
            });
        });
    }
}