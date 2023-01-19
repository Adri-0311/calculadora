import './App.css';
import Boton from './componentes/Boton.jsx';
import Pantalla from './componentes/Pantalla.jsx';
import BotonClear from './componentes/BotonClear.jsx';
import LogoFreecodecamp from './componentes/LogoFreecodecamp.jsx';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInut] = useState('');

  const agregarInput = val => {
    setInut(input + val);
  };
  const calcularResultado = val => {
    (input) ? setInut(evaluate(input)) : alert('Ingrese algun valor...');
  };

  return (
    <div className="App">
      <LogoFreecodecamp />
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInut('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
