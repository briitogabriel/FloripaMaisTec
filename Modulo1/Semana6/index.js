const express = require('express');

// ------- EXERCISE 01 - SEND A SIMPLES MESSAGE --------

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello there!')
});

// ------- EXERCISE 02 - GET A MESSAGE USING URL PARAMS --------

app.get('/nome=:name', (req, res) => {
  let name = req.params.name;
  res.send(`API route created by ${name}.`)
});

// ------- EXERCISE 03 - SEND A MESSAGE THROUGH REQ BODY AND RETURN JSON --------

app.post('/bodymessage', (req, res) => {
  let message = req.body;
  res.send(JSON.stringify(message))
});

app.listen(3333);