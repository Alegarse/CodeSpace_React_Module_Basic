import { useState } from 'react'
import './App.css'

function App() {

  const [ multiplicador, setMultiplicador ] = useState(0);
  const [ value1, setValue1] = useState(0)
  const [ value2, setValue2] = useState(0)
  const [ resultado, setResultado] = useState(0)

  return (
    <>
    <div>
      <h2>Multiplicador</h2>
      <div>
        <button onClick={() => setMultiplicador(multiplicador === 0 ? 1 :multiplicador*2)}>x2</button><br/>
        <button onClick={() => setMultiplicador(multiplicador === 0 ? 1: multiplicador*3)}>x3</button><br/>
        <span>
          Multiplicador: {multiplicador}
        </span>
      </div>
    </div>

    <div>
      <h2>Calculadora</h2>
      <div>
        <div>
          <span>Primer número:</span>
          <input type="number" onChange={(event) => setValue1(Number(event.target.value))} />
        </div>
        <div>
          <span>Segundo número:</span>
          <input type="number" onChange={(event) => setValue2(Number(event.target.value))} />
        </div>
        <button onClick={() => setResultado(value1-value2)}>-</button>
        <button onClick={() => setResultado(value1+value2)}>+</button><br/>
        <span>
          Resultado calculadora: {resultado}
        </span>
      </div>
    </div>
    </>
  )
}

export default App
