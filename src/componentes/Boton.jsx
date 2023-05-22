import React from 'react';
import '../css/Boton.css';

export default function Boton(props) {
  return (
    <button
      id={props.identificador}
      className={`boton-contenedor ${
        props.isOperator.test(props.children) ? 'operador' : ''
      }`.trim()}
      onClick={() => props.manejarClick(props.children)}
    >
      {props.children}
    </button>
  );
}
