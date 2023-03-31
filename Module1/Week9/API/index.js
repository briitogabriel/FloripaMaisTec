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
  try {
    res.json({
      message: 'Welcome!'
    })
    
  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Could not process your request'});
  }
});


app.post('/tasks', async (req, res) => {
  try {
    const newTask = {
      name: req.body.name,
      description: req.body.description
    };
  
    if (!newTask.name) {
      return res.status(400).json({error: "Name is mandatory."});
    } else {

      const findTaskName = await Task.findOne({ where: {name: newTask.name} })
      if (findTaskName) {
        return res.status(401).json({error: `Task '${newTask.name}' already exists.`});
      }
    }
  
    const postTask = await Task.create(newTask);
    res.status(201).json(postTask);
    
  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Could not process your request'});
  }
});

app.get('/tasks', async (_, res) => {
  try {
    const getTasks = await Task.findAll();
    res.status(200).json(getTasks);
    
  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Could not process your request'});
  }
});

app.listen(3000, () => console.log('App listening on port 3000'))