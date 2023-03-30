const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config({ path: './.env' });

const connection = require('./src/database/index')
const Place = require('./src/models/place');

connection.authenticate()
connection.sync();
console.log('Connection established.');

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {console.log(`App listening on port ${PORT}`)});

app.get('/', (_, res) => {
  res.status(200).json({
    message: 'Welcome!'
  });
  console.log(`${Date()} -> User logged on root`)
});

app.post('/places', async (req, res) => {
  const newPlace = {
    name: req.body.name,
    telephone: req.body.telephone,
	  openingHours: req.body.openingHours,
	  description: req.body.description,
	  latitude: req.body.latitude,
	  longitude: req.body.longitude
  }

  const postNewPlace = await Place.create(newPlace);
  res.status(201).json(postNewPlace);
  console.log(`${Date()} -> New place inserted into table`)
});

app.get('/places', async (_, res) => {
  const getAllPlaces = await Place.findAll();
  res.status(200).json(getAllPlaces);
  console.log(`${Date()} -> All places requested`)
})