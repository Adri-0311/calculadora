import React from 'react';
import '../css/BotonClear.css';

const BotonClear = (props) => (
  <button
    id={props.identificador}
    className="boton-clear"
    onClick={props.manejarClear}
  >
    {props.children}
  </button>
);

export default BotonClear;
