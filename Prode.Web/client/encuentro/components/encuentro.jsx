import React from "react";
import ReactDOM from "react-dom";
import actions from "../actions/encuentro-actions";
import store from "../stores/encuentro-store";

import { TablaEncuentro } from "../components/table-encuentro";
import { SelectEquipo } from "../components/select-equipo";
import { CustomInput } from "custom-input";

class Encuentro extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            encuentros: [], equipos: [], error: {},
            fecha: "", idLocal: "", idVisitante: "",
            reset: false
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
            error: store.getError(),
            fecha: "", idLocal: "", idVisitante: "", reset: true
        });
    }

    onElementsChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            reset: false
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
                                <CustomInput type="text" name="fecha" onlyNumbers={true} maxLength="5"
                                    onParentChange={this.onElementsChange} reset={this.state.reset} />
                            </td>
                            <td>
                                <SelectEquipo name="idLocal"
                                    equipos={this.state.equipos}
                                    reset={this.state.reset}
                                    onParentChange={this.onElementsChange} />
                            </td>
                            <td>
                                <SelectEquipo name="idVisitante"
                                    equipos={this.state.equipos}
                                    reset={this.state.reset}
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