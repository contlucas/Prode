var React = require("react");
var ReactDOM = require("react-dom");

class Encuentro extends React.Component {
    constructor(props) {
        super(props);

        this.state = { nombre: "hernan" };
    }

    render() {
        return (
            <div>
                hola mundo prode! {this.state.nombre}
            </div>
        );
    }
}

ReactDOM.render(<Encuentro />, document.getElementById("app"));