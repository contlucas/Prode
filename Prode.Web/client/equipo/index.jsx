var React = require("react");
var ReactDOM = require("react-dom");

class Equipo extends React.Component {
    constructor(props) {
        super(props);

        this.state = { nombre: "pascual" };
    }

    render() {
        return (
            <div>
                hola mundo prode! {this.state.nombre}
            </div>
        );
    }
}

ReactDOM.render(<Equipo />, document.getElementById("app"));