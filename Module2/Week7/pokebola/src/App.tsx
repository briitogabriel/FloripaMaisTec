import './App.css';
import Form from './components/Form/Form.jsx'
import Header from './components/Header/Header.jsx'
import Counter from './components/Counter/Counter.jsx'

function App() {

  return (
    <div className='App'>

      <Header />
      
      <h1>Formulário:</h1>

      <Form 
        placeholderText='Digite o e-mail'
        btnText='Botão'
        btnNumber='1'
        inputType='text'
      />
      
      <Form 
        placeholderText='Digite a senha'
        btnText='Botão'
        btnNumber='2'
        inputType='password'
      />
      
      <Form 
        placeholderText='Botão sem Props'
        inputType='text'
      />

      <Counter />

    </div>
  )
}

export default App
