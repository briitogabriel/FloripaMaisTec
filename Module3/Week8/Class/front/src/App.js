import React, { useEffect, useState } from 'react'
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(res => { setUsers(res.data) })
      .catch(error => { console.error('Error on request: ', error) })
  }, []);
  
  return (
    <>
      <h1>Usuários do Sistema:</h1>
      <ul>
        {users.map(user => (
        <li key={user.id}>
          {user.name}
        </li>
        ))}
      </ul>
    </>
  );
}

export default App;
