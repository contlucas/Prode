import AppDispatcher from "../../dispatcher/appDispatcher";
import ConstEquipo from "../constants/equipoConstants";

class EquipoStoreClass {
    saveEquipo(asd) {
        console.log("equipo " + asd + " ha sido guardado correctamente");
    }
}

const EquipoStore = new EquipoStoreClass();

EquipoStore.dispatchToken = AppDispatcher.register(action => {
    switch (action.actionType) {
        case ConstEquipo.SAVE_EQUIPO: {
            EquipoStore.saveEquipo(action.nombre);
        }
        default: {
            break;
        }
    }
});

export default EquipoStore;