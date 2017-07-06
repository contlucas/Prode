import React from "react";
import ReactDOM from "react-dom";
import actions from "../actions/encuentroActions";
import store from "../stores/encuentroStore";

class Encuentro extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            encuentros: []
        };

        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        store.addChangeListener(this.onChange);
    }

    componentDidMount() {
        actions.getEncuentros();
    }

    componentWillUnmount() {
        store.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState({
            encuentros: store.getEncuentros()
        });
    }

    onHandleChange(event) {
        this.setState({
            nombre: event.target.value
        });
    }

    onHandleButtonClick() {
        actions.saveEquipo(this.state.nombre);
    }

    render() {
        let rows = (
            this.state.encuentros.map((e) => {
                return <tr key={e.Id}>
                    <td>
                        Fecha: {e.Fecha}
                    </td>
                    <td>
                        FechaAlta: {e.FechaAlta}
                    </td>
                    <td>
                        Id: {e.Id}
                    </td>
                    <td>
                        IdLocal: {e.IdLocal}
                    </td>
                    <td>
                        IdVisitante: {e.IdVisitante}
                    </td>
                    <td>
                        Nombre Local: {e.NombreLocal}
                    </td>
                    <td>
                        Nombre Visitante: {e.NombreVisitante}
                    </td>
                </tr>
            })
        );

        return (
            <div>
                <label>Nombre de equipo: </label>
                <input placeholder="Nombre del equipo"
                    value={this.state.nombre}
                    onChange={this.onHandleChange.bind(this)} />
                <button type="button"
                    onClick={this.onHandleButtonClick.bind(this)}>Guardar</button>

                <table className="table">
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

ReactDOM.render(<Encuentro />, document.getElementById("app"));