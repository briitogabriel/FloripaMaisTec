const express = require('express');
const app = express();

const connection = require('./src/database/index')

const log = require('./src/middlewares/log');   // GLOBAL MIDDLEWARE
const validateNewUser = require('./src/middlewares/validate-new-user');   // LOCAL MIDDLEWARE (POST/user route)
const validateToken = require('./src/middlewares/validate-token');

const findTask = require('./src/controllers/tasks/findTask');
const deleteTask = require('./src/controllers/tasks/deleteTask');
const updateTask = require('./src/controllers/tasks/updateTask');
const createTask = require('./src/controllers/tasks/createTask');
const createUser = require('./src/controllers/users/createUser');
const createLogin = require('./src/controllers/users/createLogin');

connection.authenticate()
connection.sync({alter: true});   //"alter: true" forces change of datatype into database
console.log('Connection established.');

app.use(express.json());
app.use(log); // CASE OF USE -> Global Middleware (!! always has to come after app.use(express.json()) in code order !!)

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

app.post('/tasks', validateToken, createTask);
app.get('/tasks', validateToken, findTask);
app.delete('/tasks/:id', validateToken, deleteTask);
app.put('/tasks/:id', validateToken, updateTask);

app.post('/users', validateNewUser, createUser);
app.post('/users/login', createLogin);

app.listen(3000, () => console.log('App listening on port 3000'))