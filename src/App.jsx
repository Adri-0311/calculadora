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
      decimal: false,
    },
    IS_OPERATOR = new RegExp('[+*/-]'),
    ENDS_WITH_OPERATOR = new RegExp('[+*/-]$');

  const [input, setInut] = useState(INIT_VALUES);

  /**
   * Setting the necessary values to process the formula
   * @param {*} val Input element
   */
  const addInput = (val) => {
    if (IS_OPERATOR.test(val)) {
      manageOperator(val);
    }

    if (val === '.') {
      manageDecimal(val);
      return;
    }

    if (!isNaN(Number(val))) {
      manageDigit(val);
    }
  };

  const manageOperator = (val) => {
    setInut({
      ...input,
      valorActual: val,
      valorPrevio: input.valorActual,
      formula: input.formula + val,
    });
  };

  const manageDecimal = (val) => {
    if (!input.decimal) {
      // evita varios '.' decimales
      setInut({
        ...input,
        valorActual: val,
        valorPrevio: input.valorActual,
        formula: input.formula + val,
        decimal: true,
      });
    }
  };

  const manageDigit = (val) => {
    if (val === '0' && input.formula === '') {
      // evita multiples 0 a la izquierda
      return;
    } else if (
      val !== '0' &&
      input.valorActual === '0' &&
      input.valorPrevio === '0'
    ) {
      // ingreso del primer digito
      setInut({
        ...input,
        valorActual: val,
        formula: val,
      });
    } else {
      // tras haber ingresado un digito seguir concatenando
      setInut({
        ...input,
        valorActual: input.valorActual + val,
        formula: input.formula + val,
      });
    }
  };

  /**
   * Call to necesary functions to obtain result
   */
  const handleResult = () => {
    formatFomrula();
    calcResult();
  };

  /**
   * Checks if it ends with operator by deleting it.
   */
  const formatFomrula = () => {
    if (ENDS_WITH_OPERATOR.test(input.formula)) {
      setInut({ ...input, formula: input.formula.slice(0, -1) });
    }
  };

  /**
   * Processes the result
   */
  const calcResult = () => {
    if (input.formula) {
      setInut({ ...input, valorActual: evaluate(input.formula) });
    } else {
      alert('Ingrese alguna operación...');
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
            manejarClick={handleResult}
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
