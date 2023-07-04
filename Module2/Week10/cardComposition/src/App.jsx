import './App.css'
import ProfileComponent from './components/ProfileComponent/ProfileComponent'
import InfoUserComponent from "./components/InfoUserComponent/InfoUserComponent"

const App = () => {
  const user = {
    imageSource: "https://avatars.githubusercontent.com/u/71029907?v=4",
    data: {
      username: 'Gabriel Brito',
      role: 'Developer & Data Analyst',
      email: 'gabriel.brito.a@hotmail.com',
      phoneNumber: '(48) 91234-5678'
    }
  }
  
  // console.log(user.data)
  return (
    <div className='main'>
      <ProfileComponent imageSource={user.imageSource} infoUser={<InfoUserComponent userdata={user.data} />} />
    </div>
  )
}
export default App