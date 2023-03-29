const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (_, res) => {
  res.json({
    response: 'Request successful'
  })
});

const tasks = [];

app.post('/tasks', (req, res) => {
  const newTask = {
    name: req.body.name,
    description: req.body.description
  };
  tasks.push(newTask);

  console.log('List updated: ' + tasks);
  res.status(201).json(newTask);
})

app.get('/tasks', (_, res) => {
  console.log('Tasks list sent');
  res.status(200).json(tasks);
})

app.listen(3333, () => console.log('App listening on port 3333'))