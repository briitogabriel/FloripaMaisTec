import { useState } from "react"

import './Counter.css'

let newCounter = 0

export default function Counter() {

  const [counter, setCounter] = useState('Clique no contador para iniciar a contagem.')

  function handleCounterChange() {
    newCounter ++
    if(newCounter == 1) {
      setCounter(`Você clicou ${newCounter} vez.`)
    } else {
      setCounter(`Você clicou ${newCounter} vezes.`)
    }
  }

  function handleCounterReset() {
    newCounter = 0
    setCounter('Clique no contador para iniciar a contagem.')
  }

  return (
    <div className="counter">
      <h2>{counter}</h2>
      <div>
        <button onClick={handleCounterChange} type="button" className="btn btn-light counterButton">
          Contador
        </button>
        <button onClick={handleCounterReset} type="button" className="btn btn-light counterButton">
          Limpar
        </button>
      </div>

    </div>   
  )
}