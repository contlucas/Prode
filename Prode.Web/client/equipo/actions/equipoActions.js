import AppDispatcher from "../../dispatcher/appDispatcher";
import ConstEquipo from "../constants/equipoConstants";
import EquipoStore from "../stores/equipoStore";

const EquipoActions = {
    saveEquipo: (nombre) => {
        AppDispatcher.dispatch({
            actionType: ConstEquipo.SAVE_EQUIPO,
            nombre: nombre
        });
    }
}

export default EquipoActions;