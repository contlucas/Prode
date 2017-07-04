import React from "react";
import ReactDOM from "react-dom";
import aciones from "../actions/equipoActions";
import almacenes from "../stores/equipoStore";

class Equipo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre: props.nombre || ""
        };
    }

    onHandleChange(event) {
        this.setState({
            nombre: event.target.value
        });
    }

    onHandleButtonClick() {
        aciones.saveEquipo(this.state.nombre);
    }

    render() {
        return (
            <div>
                <label>Nombre de equipo: </label>
                <input placeholder="Nombre del equipo"
                    value={this.state.nombre}
                    onChange={this.onHandleChange.bind(this)} />
                <button type="button"
                    onClick={this.onHandleButtonClick.bind(this)}>Guardar</button>
            </div>
        );
    }
}

ReactDOM.render(<Equipo />, document.getElementById("app"));