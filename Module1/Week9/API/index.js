const express = require('express');
const app = express();
app.use(express.json());

// const sequelize = require('sequelize');

const connection = require('./src/database/index')
const Task = require('./src/models/task');

connection.authenticate()
connection.sync();
console.log('Connection established.');

app.get('/', (_, res) => {
  res.json({
    message: 'Welcome!'
  })
});


app.post('/tasks', async (req, res) => {
  const newTask = {
    name: req.body.name,
    description: req.body.description
  };
  
  const postTask = await Task.create(newTask);
  res.status(201).json(postTask);
})

app.get('/tasks', async (_, res) => {
  const getTasks = await Task.findAll();
  res.status(200).json(getTasks);
})

app.listen(3333, () => console.log('App listening on port 3333'))