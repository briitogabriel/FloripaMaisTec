import { useState } from "react";
import pokebolas from '../../assets/pokebolas.png'

function Header() {

  const [name, setName] = useState('Clique aqui')

  function changeName() {
    let newName = prompt('Digite seu nome:')
    if(newName) {
      setName(`Bem-vindo, ${newName}!`)
    } else {
      setName('Clique aqui')
    }
  }
    

  return (
    <div className="p-3 mb-2 bg-warning">

      <nav className="navbar navbar-light bg-light text-center rounded">
        <a className="navbar-brand" href="#" onClick={changeName}>
          <img src={pokebolas} width="30" height="30" className="d-inline-block align-top" alt="pokebolas"/>
          {name}
        </a>
      </nav>

    </div>

  )
}

export default Header;