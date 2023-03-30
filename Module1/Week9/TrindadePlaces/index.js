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
});

app.delete('/places/:id', async (req, res) => {
  const deleteId = req.params.id;
  const findPlaceId = await Place.findByPk(deleteId);

  if (findPlaceId) {
    res.status(200).json({
      success: `Place ID ${deleteId} was deleted`
    });
    await findPlaceId.destroy();

  } else {
    res.status(404).json({
      error: `Place ID ${deleteId} was not found.`
    });
  }

  console.log(`${Date()} -> Place ID ${deleteId} deleted`)
});