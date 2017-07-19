import dispatcher from "dispatcher";
import constantes from "../constants/login-constants";
import { EventEmitter } from "events";

const CHANGE_EVENT = "change";

let _error = {};

function setError(error) {
    _error = error;
}

class LoginStoreClass extends EventEmitter {
    emitChange() { this.emit(CHANGE_EVENT); }
    addChangeListener(callback) { this.on(CHANGE_EVENT, callback) }
    removeChangeListener(callback) { this.removeListener(CHANGE_EVENT, callback) }

    getError() { return _error; }

    handleChanges(action) {
        switch (action.type) {
            case constantes.LOGIN_SUCCEED: {
                addEncuentro(action.encuentro)
                this.emitChange();
                break;
            }
            case constantes.ERROR_LOGIN: {
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

const loginStore = new LoginStoreClass();
dispatcher.register(loginStore.handleChanges.bind(loginStore));
export default loginStore;