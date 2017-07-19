import React from "react";
import ReactDOM from "react-dom";
import actions from "../actions/login-actions";
import store from "../stores/login-store";

class Encuentro extends React.Component {
    constructor(props) {
        super(props);

        this.state = { user: "", password: "", error: {} };
        this.onChange = this.onChange.bind(this);
        this.onElementsChange = this.onElementsChange.bind(this);
        this.onButtonLoginClick = this.onButtonLoginClick.bind(this);
    }

    componentWillMount() {
        store.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        store.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState({ user: "", password: "" });
    }

    onElementsChange(event) {
        this.setState({ [event.target.name]: event.target.value, });
    }

    onButtonLoginClick(event) {
        actions.Login({
            User: this.state.user,
            Password: this.state.password
        });
    }

    render() {
        return (<div className="panel panel-primary">
            <div className="panel-heading">
                <h3>Iniciar sesión</h3>
            </div>
            <div className="panel-body">
                <div className="row" style={{ marginBottom: "10px" }}>
                    <label className="label-control col-xs-12 col-sm-2" htmlFor="user">Usuario</label>
                    <div className="col-xs-12 col-sm-10">
                        <input type="text" maxLength="10" name="user"
                            value={this.state.user} className="form-control"
                            onChange={this.onElementsChange} />
                    </div>
                </div>

                <div className="row" style={{ marginBottom: "10px" }}>
                    <label className="label-control col-xs-12 col-sm-2" htmlFor="password">Contraseña</label>
                    <div className="col-xs-12 col-sm-10">
                        <input type="password" maxLength="20" name="password"
                            value={this.state.password} className="form-control"
                            onChange={this.onElementsChange} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 text-right">
                        <button type="button" className="btn btn-primary"
                            onClick={this.onButtonLoginClick}>Login</button>
                    </div>
                </div>
            </div>
            <div className="panel-footer">
                <div className="row">
                    <div className="col-xs-6">
                        <a href="#">Crear una cuenta nueva</a>
                    </div>
                    <div className="col-xs-6">
                        <a href="#">¿Olvidate tu contraseña?</a>
                    </div>
                </div>
            </div>
        </div >);
    }
}

ReactDOM.render(<Encuentro />, document.getElementById("app"));