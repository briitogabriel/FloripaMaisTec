const Place = require('../../models/place');

async function createPlace (req, res) {
  const newPlace = {
    name: req.body.name,
    telephone: req.body.telephone,
	  openingHours: req.body.openingHours,
	  description: req.body.description,
	  latitude: req.body.latitude,
	  longitude: req.body.longitude
  }

  if(!newPlace.name || !newPlace.telephone || !newPlace.openingHours || !newPlace.description || !newPlace.latitude || !newPlace.longitude) {
    return res.status(400).json({error: "All fields are mandatory."});  
  }
  const postNewPlace = await Place.create(newPlace);
  res.status(201).json(postNewPlace);
  console.log(`${Date()} -> New place inserted into table`)
}

module.exports = createPlace;