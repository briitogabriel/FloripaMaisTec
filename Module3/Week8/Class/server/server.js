const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors());

app.get('/api/users', (req, res) => {
  const users = [
    {
      id: 1, name: 'Usuario 1'
    },
    {
      id: 2, name: 'Usuario 2'
    },
    {
      id: 3, name: 'Usuario 3'
    }
  ];
  res.json(users)
})

app.listen(port, () => console.log(`App listening on port ${port}`))