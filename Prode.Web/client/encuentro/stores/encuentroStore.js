import dispatcher from "../../dispatcher";
import constantes from "../constants/encuentroConstants";
import { EventEmitter } from "events";

const CHANGE_EVENT = "change";

let _encuentros = [];
let _encuentro = {};

function setEncuentros(encuentros) {
    _encuentros = encuentros;
}

function setEncuentro(encuentro) {
    _encuentro = encuentro;
}

class EncuentroStoreClass extends EventEmitter {
    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback)
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback)
    }

    saveEncuentro(encuentro) {
        //console.log("equipo " + nombre + " ha sido guardado correctamente");
        //SaveEquipoJquery(nombre);
        //util.saveEquipo("asd");
        //callAjax();
        //this.emit("change");
    }

    getEncuentros() {
        return _encuentros;
    }

    handleChanges(action) {
        switch (action.type) {
            case constantes.SAVE_ENCUENTRO: {
                this.saveEncuentro(action.encuentro);
                this.emitChange();
                break;
            }
            case constantes.GET_ENCUENTROS: {
                setEncuentros(action.encuentros);
                this.emitChange();
                break;
            }
            default: {
                console.log("sin implementar", action.type);
            }
        }
    }
}

const encuentroStore = new EncuentroStoreClass();
dispatcher.register(encuentroStore.handleChanges.bind(encuentroStore));
export default encuentroStore;