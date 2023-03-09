const express = require('express');

// ------- EXERCISE 01 - SEND A SIMPLES MESSAGE --------

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello there!')
});

// ------- EXERCISE 02 - SEND A MESSAGE USING URL PARAMS --------

app.get('/nome=:name', (req, res) => {
  let name = req.params.name;
  res.send(`API route created by ${name}.`)
});

app.listen(3333);