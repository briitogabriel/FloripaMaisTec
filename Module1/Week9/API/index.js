const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    response: 'Request successful'
  })
});

app.post('/tasks', (req, res) => {
  const newTask = req.body;
  res.json(newTask)
})

app.listen(3333, () => console.log('App listening on port 3333'))