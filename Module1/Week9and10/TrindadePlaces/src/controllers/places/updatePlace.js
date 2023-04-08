const Place = require('../../models/place');

async function updatePlace (req, res) {
  const updateId = req.params.id;
  const updatedPlace = {
    name: req.body.name,
    telephone: req.body.telephone,
	  openingHours: req.body.openingHours,
	  description: req.body.description,
	  latitude: req.body.latitude,
	  longitude: req.body.longitude
  }
  
  const placeFound = await Place.findByPk(updateId);

  if (!placeFound) {
    return res.status(404).json({
      error: `Place ID ${updateId} was not found.`
    });

  } else if(!updatedPlace.name || !updatedPlace.telephone || !updatedPlace.openingHours || !updatedPlace.description || !updatedPlace.latitude || !updatedPlace.longitude) {
    return res.status(400).json({error: "All fields are mandatory."});  
  }

  placeFound.set({
    name: updatedPlace.name,
    telephone: updatedPlace.telephone,
	  openingHours: updatedPlace.openingHours,
	  description: updatedPlace.description,
	  latitude: updatedPlace.latitude,
	  longitude: updatedPlace.longitude
  });

  await placeFound.save();
  res.status(200).json(placeFound);
  
  console.log(`${Date()} -> Place ID ${updateId} updated`)
}

module.exports = updatePlace;