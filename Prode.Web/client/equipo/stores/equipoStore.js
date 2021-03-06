﻿import dispatcher from "../../dispatcher";
import constantes from "../constants/equipoConstants";
//import { TestearJquery, SaveEquipoJquery } from "../../utils/utils";
import { EventEmitter } from "events";

class EquipoStoreClass extends EventEmitter {
    saveEquipo(nombre) {
        console.log("equipo " + nombre + " ha sido guardado correctamente");
        //SaveEquipoJquery(nombre);
        //util.saveEquipo("asd");
    }

    handleChanges(action) {
        switch (action.type) {
            case constantes.SAVE_EQUIPO: {
                this.saveEquipo(action.nombre);
                break;
            }
            default: {
                console.log("sin implementar", action.type);
            }
        }
    }
}

const equipoStore = new EquipoStoreClass();
dispatcher.register(equipoStore.handleChanges.bind(equipoStore));
export default equipoStore;