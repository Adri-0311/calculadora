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
      evaluate: false,
    },
    IS_OPERATOR = new RegExp('[+*/-]'),
    ENDS_WITH_OPERATOR = new RegExp('[+*/-]$');

  const [input, setInput] = useState(INIT_VALUES);

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
    }

    if (!isNaN(Number(val))) {
      manageDigit(val);
    }
  };

  const manageOperator = (val) => {
    if (input.evaluate){
      // Tras una operación usar el resultado para la siguiente operación
      setInput({
        ...INIT_VALUES,
        valorActual: val,
        valorPrevio: '0',
        formula: input.valorActual + val,
      });
    } else if (IS_OPERATOR.test(input.valorActual) && val !== '-') {
      // Si se introducen 2 o más operadores consecutivamente nos quedamos con el último excluyendo el '-'
      setInput({
        ...input,
        valorActual: val,
        valorPrevio: input.valorActual,
        formula:
          input.formula
            .split('')
            .filter((e) => !IS_OPERATOR.test(e))
            .join('') + val,
      });
    } 
    else if (input.valorActual !== val) {
      // ingresar otro operador
      setInput({
        ...input,
        valorActual: val,
        valorPrevio: input.valorActual,
        formula: input.formula + val,
      });
    }
  };

  const manageDecimal = (val) => {
    const splitFormula = input.formula.split(IS_OPERATOR);
    if (!splitFormula.at(-1).includes('.')) {
      // evita varios '.' decimales
      setInput({
        ...input,
        valorActual: input.valorActual + val,
        valorPrevio: input.valorActual,
        formula: input.formula + val,
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
      setInput({
        ...input,
        valorActual: val,
        formula: val,
      });
    } else if (input.evaluate) {
      // si se ha realizado una operación resetea a los valores iniciales y añade los nnuevos dígitos
      setInput({ ...INIT_VALUES, valorActual: val, formula: val });
    } else if (IS_OPERATOR.test(input.valorActual)) {
      // si anteriormente se introdujo un operador no se concatena en valorActual
      setInput({
        ...input,
        valorActual: val,
        formula: input.formula + val,
      });
    } else {
      // tras haber ingresado un digito seguir concatenando
      setInput({
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
      setInput({ ...input, formula: input.formula.slice(0, -1) });
    }
  };

  /**
   * Processes the result
   */
  const calcResult = () => {
    if (input.formula) {
      setInput({
        ...input,
        valorActual: evaluate(input.formula),
        evaluate: true,
      });
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
            manejarClear={() => setInput(INIT_VALUES)}
          >
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
