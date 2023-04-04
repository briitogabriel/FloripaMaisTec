const express = require('express');
const app = express();
app.use(express.json());

const connection = require('./src/database/index')
const Task = require('./src/models/task');
const User = require('./src/models/user');

connection.authenticate()
connection.sync({alter: true});   //"alter: true" forces change of datatype into database
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


app.delete('/tasks/:id', async (req, res) => {
  try {
    await Task.destroy({ where: {id: req.params.id} });
    res.status(204).json();
    
  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Could not process your request'});
  }
});


app.put('/tasks/:id', async (req, res) => {
  const updateId = req.params.id;
  const updatedTask = {
    name: req.body.name,
    description: req.body.description
  }
  
  const taskFound = await Task.findByPk(updateId);

  if (!taskFound) {
    return res.status(404).json({
      error: `Task ID ${updateId} was not found.`
    });

  } else if(!updatedTask.name) {
    return res.status(400).json({error: "Name field is mandatory."});  
  }

  taskFound.set({
    name: updatedTask.name,
	  description: updatedTask.description
  });

  await taskFound.save();
  res.status(200).json(taskFound);
  
  console.log(`${Date()} -> Task ID ${updateId} updated`)
});


app.post('/users', async (req, res) => {
  try {
    const { name, cpf, password } = req.body;
    
    if (!name || !cpf || !password) {
      return res.status(400).json({error: "Name, CPF and Password are mandatory."});
    }

    const newUser = {
      name,
      cpf,
      password
    };

    const user = await User.create(newUser);
    res.status(201).json({user});

  } catch (error) {
    res.status(500).json({error: 'Could not process your request'});
  }
});


app.listen(3000, () => console.log('App listening on port 3000'))