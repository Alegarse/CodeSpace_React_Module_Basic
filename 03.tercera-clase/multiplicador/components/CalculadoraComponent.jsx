import React, { useEffect, useState } from "react";

const CalculadoraComponent = () => {
  const [multiplicador, setMultiplicador] = useState(0);

  const multiplicar = (valorParaMultiplicar) => {
    if (multiplicador !== 0) {
      setMultiplicador(multiplicador * valorParaMultiplicar);
    } else {
      setMultiplicador(1);
    }
  };
  
  return (
    <div>
      <h2>Multiplicador</h2>
      <div>
        {/* Posibles soluciones pero no son las ideales 
        <button onClick={() => setMultiplicador(multiplicador === 0 ? 1 :multiplicador*2)}>x2</button><br/>
        <button onClick={() => setMultiplicador(multiplicador === 0 ? 1: multiplicador*3)}>x3</button><br/>
        */}
        <button onClick={() => multiplicar(2)}>x2</button><br/>
        <button onClick={() => multiplicar(3)}>x3</button><br/>
        <button onClick={() => multiplicar(0)}>Reset</button><br/>
        <span>Resultado multiplicador: {multiplicador}</span>
      </div>
    </div>
  );
};

export default CalculadoraComponent;
