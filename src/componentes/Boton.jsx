import React from 'react';
import '../css/Boton.css';

export default function Boton(props) {
    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return (
        <button className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trim()}
            onClick={() => props.manejarClick(props.children)}>
            {props.children}
        </button>
    );
}