import React from "react";
import ReactDOM from "react-dom";
import EquipoActions from "../actions/equipoActions";

class Equipo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre: props.nombre || ""
        };

        this.onHandleButtonClick = this.onHandleButtonClick.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    onHandleChange(event) {
        this.setState({
            nombre: event.target.value
        });
    }

    onHandleButtonClick() {
        EquipoActions.saveEquipo(this.state.nombre)
    }

    render() {
        return (
            <div>
                <label>
                    Nombre de equipo:
                    </label>
                <input value={this.state.nombre} placeholder="Nombre del equipo"
                    onChange={this.onHandleChange} />
                <button type="button" onClick={this.onHandleButtonClick}>Guardar</button>
            </div>
        );
    }
}

ReactDOM.render(<Equipo />, document.getElementById("app"));