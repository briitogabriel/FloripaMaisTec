import './style.css'
import database from './database/users.json' 

let userList = database.map((user) =>  `<li>${user.username}</li>`)

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Search User App</h1>
    <div>
      <input id="input" placeholder="Enter the user name" />
      <div>
        <button onClick={handleSearch()}>Search</button>
        <button onClick={handleClear()}>Clear</button>
      </div>
    </div>
    <ul id="list">

    </ul>
  </div>
`

window.handleSearch = () => {
  let input = document.getElementById('input')
  const userData = database.filter((user) => {
    if (user.username == input.value) {
      return user;
    }
  });
  console.log(userData)
  
  const list = document.getElementById('list')
  let userFound = userData.map((data) => 
    `<li><b>Name:</b> ${data.name}</li>
    <li><b>Username:</b> ${data.username}</li>
    <li><b>Rating:</b> ${data.rating}</li>`
  )

  if (userFound.length > 0) {
    list.innerHTML = userFound
  } else {
    list.innerHTML = `<li><b>Username not found. Select one of the bellow:</b></li></br>${userList.toString().replaceAll(',','')}`
  }
};

window.handleClear = () => {
  const list = document.getElementById('list')
  list.innerHTML = ''
  input.value = ''
};