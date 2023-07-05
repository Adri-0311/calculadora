import '../css/Boton.css';

export default function Boton({
  identificador,
  isOperator,
  children,
  manejarClick,
}) {
  return (
    <button
      id={identificador}
      className={`boton-contenedor ${
        isOperator.test(children) ? 'operador' : ''
      }`.trim()}
      onClick={() => manejarClick(children)}
    >
      {children}
    </button>
  );
}
