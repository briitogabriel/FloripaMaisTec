const Place = require('../../models/place');

async function findPlace (_, res) {
  const getAllPlaces = await Place.findAll();
  res.status(200).json(getAllPlaces);
  console.log(`${Date()} -> All places requested`)
}

module.exports = findPlace;