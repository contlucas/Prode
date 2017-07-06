import dispatcher from "../../dispatcher";
import constantes from "../constants/encuentroConstants";
import { callAjax } from "../../common/utils";

export default {
    saveEncuentro: (encuentro) => {
        dispatcher.dispatch({
            type: constantes.SAVE_EQUIPO,
            encuentro
        });
    },
    getEncuentros: () => {
        callAjax({
            method: "GET",
            url: "http://localhost:49202/api/v1/Encuentros/GetAll"
        }, function (data) {
            dispatcher.dispatch({
                type: constantes.GET_ENCUENTROS,
                encuentros: data
            });
        });
    }
}