import React from 'react';
import Gasto from "./Gasto";
import PropTypes from "prop-types";

export default function Listado(props) {

    const { gastos, eliminar } = props;

    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {gastos.map(gasto => (
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                    eliminar={eliminar}
                />
            ))}
        </div>
    )

}



Listado.propTypes = {
    gastos: PropTypes.array.isRequired
}
