const Place = require('../../models/place');

async function deletePlace (req, res) {
  const deleteId = req.params.id;
  const placeFound = await Place.findByPk(deleteId);

  if (!placeFound) {
    return res.status(404).json({
      error: `Place ID ${deleteId} was not found.`
    });
    
  }
    res.status(204).json({
      success: `Place ID ${deleteId} was deleted`
    });
    await placeFound.destroy();

  console.log(`${Date()} -> Place ID ${deleteId} deleted`)
}

module.exports = deletePlace;