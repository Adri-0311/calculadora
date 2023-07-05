import '../css/BotonClear.css';

const BotonClear = ({ identificador, manejarClear, children }) => (
  <button id={identificador} className='boton-clear' onClick={manejarClear}>
    {children}
  </button>
);

export default BotonClear;
