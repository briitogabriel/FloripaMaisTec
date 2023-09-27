import { useState } from "react"

export const FormComponent = () => {

  const [data, setData] = useState({
    email: '',
    name: ''
  });

  const handleInput = ({ target }) => {
    const { value, name } = target;
    setData({ [name]: value, ...data })
  }

  const submit = (e) => {
    e.preventDefault()
    console.log(dat)
  }

  return (
    <form onSubmit={submit} data-testid="form-testid">
      <input type="text" onInput={handleInput} placeholder="Digite seu nome" name='name'/>
      <input type="email" onInput={handleInput} placeholder="Digite seu e-mail" name='email'/>
      <button type="submit">Enviar</button>

      {
        (!data.email.length || !data.name.length)
            &&
        (<p>Campos não foram preenchidos</p>) 
      }
    </form>
  )
}
