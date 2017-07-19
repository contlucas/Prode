import React from "react";

export class SelectEquipo extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: "0" };
        this.onChildChange = this.onChildChange.bind(this);
    }

    onChildChange(event) {
        this.setState({ value: event.target.value });
        this.props.onParentChange(event);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.reset) {
            this.setState({ value: "0" });
        }
    }

    render() {
        let options = (
            this.props.equipos.map((e) => {
                return <option id={"select_equipo_option" + e.Id} key={e.Id} value={e.Id}>{e.Nombre}</option>
            })
        );

        return <select className="form-control"
            value={this.state.value}
            name={this.props.name}
            onChange={this.onChildChange}>
            <option value="0">Seleccionar equipo</option>
            {options}
        </select >
    }
}