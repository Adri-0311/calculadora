import { React, useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';
import Boton from './componentes/Boton.jsx';
import Pantalla from './componentes/Pantalla.jsx';
import BotonClear from './componentes/BotonClear.jsx';
import LogoFreecodecamp from './componentes/LogoFreecodecamp.jsx';

function App() {
  const INIT_VALUES = {
      valorActual: '0',
      valorPrevio: '0',
      formula: '',
    },
    IS_OPERATOR = new RegExp('[+*/-]'),
    ENDS_WITH_OPERATOR = new RegExp('[+*/-]$');

  const [input, setInut] = useState(INIT_VALUES);

  /**
   *
   * Check the input and manage the return to show in the display element
   * @param {*} val Input element
   * @returns
   */
  const manageInput = (val) => {
    if (IS_OPERATOR.test(val)) {
      return val;
    } else if (val !== '0' && input.valorActual === '0') {
      return val;
    }
    return val;
  };

  /**
   * Setting the necessary values to process the formula
   * @param {*} val Input element
   */
  const addInput = (val) => {
    let valProcessed = manageInput(val);
    setInut({
      valorActual: valProcessed,
      valorPrevio: input.valorActual,
      formula: input.formula + valProcessed,
    });
  };

  /**
   * First checks if it ends with operator by deleting it and processes the result
   */
  const calcularResultado = () => {
    let formula = input.formula;
    if (ENDS_WITH_OPERATOR.test(formula)) {
      formula = formula.slice(0, -1);
    }

    if (formula) {
      setInut({ ...input, valorActual: evaluate(formula), formula: formula });
    } else {
      alert('Ingrese algun valor...');
    }
  };

  return (
    <div className="App">
      <LogoFreecodecamp />
      <div className="contenedor-calculadora">
        <Pantalla input={input.valorActual} formula={input.formula} />
        <div className="fila">
          <Boton
            identificador="seven"
            manejarClick={addInput}
            isOperator={IS_OPERATOR}
          >
            7
          </Boton>
          <Boton
            identificador="eight"
            manejarClick={addInput}
            isOperator={IS_OPERATOR}
          >
            8
          </Boton>
          <Boton
            identificador="nine"
            manejarClick={addInput}
            isOperator={IS_OPERATOR}
          >
            9
          </Boton>
          <Boton
            identificador="multiply"
            manejarClick={addInput}
            isOperator={IS_OPERATOR}
          >
            *
          </Boton>
        </div>
        <div className="fila">
          <Boton
            identificador="four"
            manejarClick={addInput}
            isOperator={IS_OPERATOR}
          >
            4
          </Boton>
          <Boton
            identificador="five"
            manejarClick={addInput}
            isOperator={IS_OPERATOR}
          >
            5
          </Boton>
          <Boton
            identificador="six"
            manejarClick={addInput}
            isOperator={IS_OPERATOR}
          >
            6
          </Boton>
          <Boton
            identificador="divide"
            manejarClick={addInput}
            isOperator={IS_OPERATOR}
          >
            /
          </Boton>
        </div>
        <div className="fila">
          <Boton
            identificador="one"
            manejarClick={addInput}
            isOperator={IS_OPERATOR}
          >
            1
          </Boton>
          <Boton
            identificador="two"
            manejarClick={addInput}
            isOperator={IS_OPERATOR}
          >
            2
          </Boton>
          <Boton
            identificador="three"
            manejarClick={addInput}
            isOperator={IS_OPERATOR}
          >
            3
          </Boton>
          <Boton
            identificador="subtract"
            manejarClick={addInput}
            isOperator={IS_OPERATOR}
          >
            -
          </Boton>
        </div>
        <div className="fila">
          <Boton
            identificador="equals"
            manejarClick={calcularResultado}
            isOperator={IS_OPERATOR}
          >
            =
          </Boton>
          <Boton
            identificador="zero"
            manejarClick={addInput}
            isOperator={IS_OPERATOR}
          >
            0
          </Boton>
          <Boton
            identificador="decimal"
            manejarClick={addInput}
            isOperator={IS_OPERATOR}
          >
            .
          </Boton>
          <Boton
            identificador="add"
            manejarClick={addInput}
            isOperator={IS_OPERATOR}
          >
            +
          </Boton>
        </div>
        <div className="fila">
          <BotonClear
            identificador="clear"
            manejarClear={() => setInut(INIT_VALUES)}
          >
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
