import './App.css'
import PersonData from './components/personData/personData'

function App() {
  const person = {
    name: 'Gabriel',
    age: 28,
    hobbie: 'watch soccer'
  }

  return (
    <div className='container-fluid'>
      <PersonData name={person.name} age={person.age} hobbie={person.hobbie} />
    </div>
  )
}

export default App
