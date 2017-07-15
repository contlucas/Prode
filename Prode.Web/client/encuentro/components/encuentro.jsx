import React from "react";
import ReactDOM from "react-dom";
import actions from "../actions/encuentroActions";
import store from "../stores/encuentroStore";

import { TablaEncuentro } from "../components/tableEncuentro";
import { SelectEquipo } from "../components/selectEquipo";

class Encuentro extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            encuentros: [], equipos: [], error: {}, idLocal: "", idVisitante: "", fecha: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onElementsChange = this.onElementsChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    componentWillMount() {
        store.addChangeListener(this.onChange);
    }

    componentDidMount() {
        actions.getEncuentros();
        actions.getEquipos();
    }

    componentWillUnmount() {
        store.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState({
            encuentros: store.getEncuentros(),
            equipos: store.getEquipos(),
            error: store.getError()
        });
    }

    onElementsChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onButtonClick() {
        actions.saveEncuentro({
            Fecha: this.state.fecha,
            IdLocal: this.state.idLocal,
            IdVisitante: this.state.idVisitante
        });
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.error.Descripcion}
                </div>

                <table className="table table-border">
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Local</th>
                            <th>Visitante</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input className="form-control" type="text" value={this.state.fecha} name="fecha"
                                    onChange={this.onElementsChange} />
                            </td>
                            <td>
                                <SelectEquipo name="idLocal"
                                    equipos={this.state.equipos}
                                    onParentChange={this.onElementsChange} />
                            </td>
                            <td>
                                <SelectEquipo name="idVisitante"
                                    equipos={this.state.equipos}
                                    onParentChange={this.onElementsChange} />
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3">
                                <div className="text-right">
                                    <button className="btn btn-primary" type="button" onClick={this.onButtonClick}>Guardar</button>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>

                <TablaEncuentro encuentros={this.state.encuentros} />
            </div>
        );
    }
}

ReactDOM.render(<Encuentro />, document.getElementById("app"));