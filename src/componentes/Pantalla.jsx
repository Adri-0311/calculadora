import React from 'react';
import '../css/Pantalla.css';

const Pantalla = ({ input, formula }) => (
    <div className="screen">
        <div className="formula">{formula}</div>
        <div id="display" className="input-output">
            {input}
        </div>
    </div>
);

export default Pantalla;