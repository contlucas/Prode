import dispatcher from "../../dispatcher";
import constantes from "../constants/equipoConstants";

export default {
    saveEquipo: (nombre) => {
        dispatcher.dispatch({
            type: constantes.SAVE_EQUIPO,
            nombre: nombre
        });
    }
}