const express = require('express');
const app = express();
require('dotenv').config({ path: './.env' });

const connection = require('./src/database/index')

const updatePlace = require('./src/controllers/places/updatePlace');
const deletePlace = require('./src/controllers/places/deletePlace');
const findPlace = require('./src/controllers/places/findPlace');
const createPlace = require('./src/controllers/places/createPlace');

const createUser = require('./src/controllers/users/createUser');
const createSession = require('./src/controllers/users/createSession');

connection.authenticate()
connection.sync();
console.log('Connection established.');

app.use(express.json());

app.get('/', (_, res) => {
  try {
    res.status(200).json({
      message: 'Welcome!'
    });
    console.log(`${Date()} -> User logged on root`)
  } catch (error) {
    console.log(err);
    res.status(500).json({error: 'Could not process your request'});
  }
});

app.post('/places', createPlace);
app.get('/places', findPlace);
app.delete('/places/:id', deletePlace);
app.put('/places/:id', updatePlace);

app.post('/users', createUser);
app.post('/sessions', createSession);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {console.log(`App listening on port ${PORT}`)});