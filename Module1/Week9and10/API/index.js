const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const connection = require('./src/database/index')
const Task = require('./src/models/task');
const User = require('./src/models/user');

connection.authenticate()
connection.sync({alter: true});   //"alter: true" forces change of datatype into database
console.log('Connection established.');

app.use(express.json());

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
    const hash = await bcrypt.hash(password, 10)  // (VAR, SaltRounds) -> security level x processing

    cpf_numb = cpf.replace(/\D/g,'')
    
    const userInDatabase = await User.findOne({ where: {
      cpf: cpf
    }});
    
    if (!name || !cpf_numb || !password) {
      return res.status(400).json({error: "Name, CPF and Password are mandatory."});
    } else
      
      if (userInDatabase) {
        return res.status(403).json({error: `Wrong credentials.`}); //Should not return aditional information to others
    }
    
    const newUser = {
      name,
      cpf: cpf_numb,
      password: hash
    };

    const user = await User.create(newUser);
    // const { password, ...rest } = await User.create(newUser); -> DESTRUCTURING TO GET ALL DATA BUT PASSWORD (Should not retrieve password in res.json())
    res.status(201).json({ user: {
      id: user.id,
      name: user.name,
      cpf: user.cpf,
      updatedAt: user.updatedAt,
      createdAt: user.createdAt
    }});

  } catch (error) {
    res.status(500).json({error: 'Could not process your request'});
  }
});


app.post('/users/login', async (req, res) => {
  try {
    const userInDatabase = await User.findOne({where:{
      cpf: req.body.cpf
    }});
  
    if (!userInDatabase) {
      return res.status(404).json({error: `Incorrect credentials.`});
    }
  
    const passwordIsValid = await bcrypt.compare(req.body.password, userInDatabase.password)
    if (!passwordIsValid) {
      return res.status(404).json({error: `Wrong password.`});
    }

    const token = jwt.sign(
      { id: userInDatabase.id },  // INFORMATION TO BE ENCRYPTED
      'SECRET_KEY',               // SECRET_KEY (example only in this exercise -> should use something specific and not obvious, through .ENV)
      { expiresIn: '1h' /*, algorithm: 'ES256' -> PADRÃO DE ALGORITMO USADO NA LIB */ }         // EXPIRATION TIMER
    );
  
    res.status(200).json({message: `User ${userInDatabase.name} logged in!`, token: token})
    
  } catch (error) {
    res.status(500).json({error: 'Could not process your request'});
  }
})


app.listen(3000, () => console.log('App listening on port 3000'))