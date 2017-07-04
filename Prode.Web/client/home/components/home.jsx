import React from "react";
import ReactDOM from "react-dom";

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = { nombre: "lucas" };
    }

    render() {
        return (
            <div>
                hola mundo prode! {this.state.nombre}
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById("app"));