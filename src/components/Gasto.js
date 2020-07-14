import React from 'react';
import PropTypes from "prop-types";

const Gasto = ({ gasto, eliminar }) => (
    <div className="containerGasto">
        <li className="gastos">
            <p>
                <span className="nombre">
                    {gasto.nombre}
                </span>

                <span className="gasto">
                    ${gasto.cantidad}
                </span>
            </p>
        </li >
        <button
            className="button-primary "
            onClick={() => eliminar(gasto.id)}
        >
            Eliminar
        </button>
    </div >
);

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}

export default Gasto;