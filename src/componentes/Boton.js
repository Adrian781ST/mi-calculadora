import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  const esIgual = valor => {
    return valor === '=';
  };

  return (
    <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''} ${esIgual(props.children) ? 'boton-igual' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;