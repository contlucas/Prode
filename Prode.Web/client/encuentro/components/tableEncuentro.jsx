import React from "react";

export class TablaEncuentro extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let rows = (
            this.props.encuentros.map((e) => {
                return <tr key={e.Id}>
                    <td>{e.Fecha}</td>
                    <td>{e.NombreLocal}</td>
                    <td>{e.NombreVisitante}</td>
                </tr>
            })
        );

        return (<div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>fecha</th>
                        <th>local</th>
                        <th>visitante</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>);
    }
}