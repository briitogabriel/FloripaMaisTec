import { useState } from "react"

export const CounterComponent = () => {

  const [count, setCount] = useState(0);

  return (
    <div data-testid="counter-testid">
      <button onClick={() => {setCount(count + 1)}}>Clique Aqui</button>
      <p data-testid="counter-value">{count}</p>
    </div>
  )
}
