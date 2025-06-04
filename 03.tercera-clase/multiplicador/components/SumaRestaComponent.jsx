import React, { useState } from "react";

const SumaRestaComponent = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [resultado, setResultado] = useState(0);
  return (
    <div>
      <h2>Calculadora</h2>
      <div>
        <div>
          <span>Primer número:</span>
          <input
            type="number"
            onChange={(event) => setValue1(Number.parseInt(event.target.value))}
          />
        </div>
        <div>
          <span>Segundo número:</span>
          <input
            type="number"
            onChange={(event) => setValue2(Number.parseInt(event.target.value))}
          />
        </div>
        <button onClick={() => setResultado(value1 - value2)}>-</button>
        <button onClick={() => setResultado(value1 + value2)}>+</button>
        <br />
        <span>Resultado calculadora: {resultado}</span>
      </div>
    </div>
  );
};

export default SumaRestaComponent;
