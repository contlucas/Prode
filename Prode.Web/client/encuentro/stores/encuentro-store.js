import dispatcher from "dispatcher";
import constantes from "../constants/encuentro-constants";
import { EventEmitter } from "events";

const CHANGE_EVENT = "change";

let _encuentros = [];
let _equipos = [];
let _error = {};

function setEncuentros(encuentros) {
    _encuentros = encuentros;
}

function setEquipos(equipos) {
    _equipos = equipos;
}

function addEncuentro(encuentro) {
    _encuentros.push(encuentro);
}

function setError(error) {
    _error = error;
}

class EncuentroStoreClass extends EventEmitter {
    emitChange() { this.emit(CHANGE_EVENT); }
    addChangeListener(callback) { this.on(CHANGE_EVENT, callback) }
    removeChangeListener(callback) { this.removeListener(CHANGE_EVENT, callback) }

    getEncuentros() { return _encuentros; }
    getEquipos() { return _equipos; }
    getError() { return _error; }

    handleChanges(action) {
        switch (action.type) {
            case constantes.SAVE_ENCUENTRO: {
                addEncuentro(action.encuentro)
                this.emitChange();
                break;
            }
            case constantes.GET_ENCUENTROS: {
                setEncuentros(action.encuentros);
                this.emitChange();
                break;
            }
            case constantes.GET_EQUIPOS: {
                setEquipos(action.equipos);
                this.emitChange();
                break;
            }
            case constantes.ERROR_ENCUENTRO: {
                setError(action.error);
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